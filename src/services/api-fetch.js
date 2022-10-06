import { BASE_URI, tokenKey } from "../config";
export default async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  const token = JSON.parse(sessionStorage.getItem(tokenKey));
  console.log(token);
  if (token) {
    headers = {
      ...token,
      ...headers,
    };
  }

  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }
  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);

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
