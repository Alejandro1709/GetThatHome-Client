import apiFetch from "./api-fetch";

export function getMyProperties() {
  return apiFetch("/my_properties").then((data) => {
    return data;
  });
}