import apiFetch from "./api-fetch";

export function getProperties() {
  return apiFetch("/properties").then((data) => {
    return data;
  });
}
