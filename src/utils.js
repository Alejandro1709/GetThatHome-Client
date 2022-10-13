export function isVowel(x) {
  return /[aeiouAEIOU]/.test(x);
}

export function filterFavorite(savedProps) {
  return savedProps.filter((prop) => prop.favorite === true);
}

export function filterContacted(savedProps) {
  return savedProps.filter((prop) => prop.contacted === true);
}
