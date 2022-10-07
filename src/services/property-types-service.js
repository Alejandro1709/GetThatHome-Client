import apiFetch from "./api-fetch";

export function getPropertyTypes() {
  return apiFetch("/property_types").then((data) => {
    return data;
  });
}