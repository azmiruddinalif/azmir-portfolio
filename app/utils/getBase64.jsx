import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (item) => {
  try {
    const res = await fetch(item);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    console.log(error);
  }
};

// utils/getBase64Client.js
export default async function getBase64Client(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/jpeg");
      resolve(dataURL);
    };
    img.onerror = (err) => reject(err);
  });
}
