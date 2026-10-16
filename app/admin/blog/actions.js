"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  checkCredentials,
  createSession,
  destroySession,
  isAuthed,
} from "@/app/lib/adminAuth";
import { getBlogsData, saveBlogsData, slugify } from "@/app/lib/blogsStore";

export async function loginAction(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!checkCredentials(email, password)) {
    redirect("/admin/blog?error=invalid");
  }

  await createSession();
  redirect("/admin/blog");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/blog");
}

export async function createBlogAction(formData) {
  if (!(await isAuthed())) {
    redirect("/admin/blog");
  }

  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const tagsRaw = formData.get("tags")?.toString() || "";
  const image = formData.get("image");

  if (!title || !description) {
    redirect("/admin/blog?error=missing");
  }

  const json = getBlogsData();
  const data = json.data;

  const baseSlug = slugify(title);
  let slug = baseSlug;
  let suffix = 1;
  while (data.some((b) => b.slug === slug)) {
    slug = `${baseSlug}-${suffix++}`;
  }

  let imageUrl = null;
  if (image && typeof image === "object" && image.size > 0) {
    const ext = path.extname(image.name) || ".jpg";
    const filename = `${Date.now()}-${slugify(path.basename(image.name, ext))}${ext}`;
    const buffer = Buffer.from(await image.arrayBuffer());
    const uploadDir = path.join(process.cwd(), "public", "uploads", "blogs");
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, filename), buffer);
    imageUrl = `/uploads/blogs/${filename}`;
  }

  const newId = data.reduce((max, b) => Math.max(max, b.id || 0), 0) + 1;
  const now = new Date().toISOString();

  const tags = tagsRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t, i) => ({ id: Date.now() + i, tag: t }));

  const newBlog = {
    id: newId,
    documentId: slug,
    title,
    slug,
    date_of_post: now.slice(0, 10),
    blog_description: description,
    createdAt: now,
    updatedAt: now,
    publishedAt: now,
    blog_image: imageUrl ? { url: imageUrl } : null,
    tags,
  };

  data.unshift(newBlog);
  saveBlogsData(json);

  revalidatePath("/blogs");
  revalidatePath(`/blogs/${slug}`);
  revalidatePath("/admin/blog");

  redirect("/admin/blog");
}

export async function deleteBlogAction(formData) {
  if (!(await isAuthed())) {
    redirect("/admin/blog");
  }

  const slug = formData.get("slug")?.toString();
  const json = getBlogsData();
  json.data = json.data.filter((b) => b.slug !== slug);
  saveBlogsData(json);

  revalidatePath("/blogs");
  revalidatePath(`/blogs/${slug}`);
  revalidatePath("/admin/blog");

  redirect("/admin/blog");
}
