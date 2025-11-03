import "dotenv/config";
import { mkdir, writeFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "https://supreme-actor-a1b5508506.strapiapp.com/api";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function fetchFromStrapi(endpoint, locale = "en") {
  const url = endpoint.includes("?")
    ? `${STRAPI_BASE_URL}/${endpoint}`
    : `${STRAPI_BASE_URL}/${endpoint}?locale=${locale}`;



  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
  return res.json();
}

async function buildBlogs(locale = "en") {
  console.log("📰 Fetching blogs data from Strapi...");

  const data = await fetchFromStrapi(
    `blogs?populate=*&sort[0]=date_of_post:desc&locale=${locale}`
  );

  console.log("📦 Raw response:", JSON.stringify(data, null, 2));

  if (!data?.data?.length) {
    console.log("⚠️ No blog data found in Strapi response!");
    return;
  }

  const dataDir = new URL("../data/", import.meta.url);
  await mkdir(dataDir, { recursive: true });

  const filePath = new URL("../data/blogs.json", import.meta.url);
  await writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

  console.log(`✅ Saved ${data.data.length} full blogs → app/data/blogs.json`);
}

export const preBuildBlogs = async () => {
 try {
    const locale = "en";
    await buildBlogs(locale);
    console.log("🎉 Blog prebuild finished successfully!");
  } catch (err) {
    console.error("❌ Blog prebuild failed:", err);
    process.exit(1);
  }
};

// Always run automatically
console.log("⚙️ Blog prebuild script started...");
preBuildBlogs()
  .then(() => console.log("✅ Blog prebuild completed and JSON written."))
  .catch((err) => {
    console.error("❌ Blog prebuild failed:", err);
    process.exit(1);
  });
