export function filteredByPrice(properties, { min, max }) {
  if (!min && !max) return properties;

  return properties.filter((prop) => {
    const rent = prop.operation_type.monthly_rent;
    const price = prop.operation_type.price;
    if (rent) {
      return rent >= min && rent <= max;
    }
    if (price) {
      return price >= min && price <= max;
    }
  });
}

export function filteredByType(properties, { apartments, houses }) {
  if (!apartments && !houses) return properties;
  if (apartments && houses) return properties;
  return properties.filter((prop) => {
    if (apartments) return prop.property_type.name === "Apartment";
    if (houses) return prop.property_type.name === "House";
  });
}

export function filteredByAmbients(properties, { beds, baths }) {
  if (!beds && !baths) return properties;
  return properties.filter((prop) => {
    return prop.bedrooms >= beds && prop.bathrooms >= baths;
  });
}

export function filteredByArea(properties, { min, max }) {
  if (!min && !max) return properties;
  return properties.filter((prop) => prop.area >= min && prop.area <= max);
}

export function filterPetsAllowed(properties) {
  return properties.filter((prop) => prop.operation_type.pets_allowed === true);
}

export function filterByOpType(properties, { rent, sale }) {
  if ((!rent && !sale) || (rent && sale)) return properties;
  return properties.filter((prop) => {
    if (rent) return prop.operation_type.type === "for rent";
    if (sale) return prop.operation_type.type === "for sale";
  });
}

export function filterProperties(properties, filter) {
  const { price, type, ambients, pets, area, op_type } = filter;
  const filter1 = filteredByPrice(properties, price);
  const filter2 = filteredByType(filter1, type);
  const filter3 = filteredByAmbients(filter2, ambients);
  let filter4 = filter3;
  if (pets) {
    filter4 = filterPetsAllowed(filter4);
  }
  const filter5 = filteredByArea(filter4, area);
  return filterByOpType(filter5, op_type);
}

export function isVowel(x) {  return /[aeiouAEIOU]/.test(x); }