import { CLOUDINARY_BASE_URI } from "../config";

export default async function uploadImages(body) {
  const endpoint = "/image/upload";
  const config = {
    method: "POST",
    body,
  };

  const response = await fetch(CLOUDINARY_BASE_URI + endpoint, config);

  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(JSON.stringify(data.errors));
  }
  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }
  return data;
}
