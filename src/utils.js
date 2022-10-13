import { showProperty } from "./services/properties-service";

export function isVowel(x) {
  return /[aeiouAEIOU]/.test(x);
}

export function filterFavorite(savedProps) {
  return savedProps.filter((prop) => prop.favorite === true);
}

export function filterContacted(savedProps) {
  return savedProps.filter((prop) => prop.contacted === true);
}

export function transformSavedList(saved) {
  let arr = [];
  saved.forEach((e) => {
    showProperty(e.property.id)
      .then((data) => {
        arr.push({ ...data, favorite: e.favorite });
      })
      .catch(console.log);
  });
  return arr;
}
