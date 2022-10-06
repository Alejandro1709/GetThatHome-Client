import apiFetch from "./api-fetch";

export function getProperties() {
  return apiFetch("/properties").then((data) => {
    return data;
  });
}

export function showProperty(id) {
  return apiFetch("/properties/"+id).then((data) => {
    console.log("good!")
    return data;
  });
}