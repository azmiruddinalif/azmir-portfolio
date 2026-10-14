import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "app", "lib", "blogsData.json");

export function getBlogsData() {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export function saveBlogsData(json) {
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), "utf-8");
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}
