import apiFetch from "./api-fetch";

export function getSavedProperties() {
  return apiFetch("/saved_properties").then((data) => {
    return data;
  });
}

export function updateSavedProperties(data,id) {
  return apiFetch("/saved_properties/"+id, { method:"PATCH",body: data }).then((data) => {
    return data;
  });
}