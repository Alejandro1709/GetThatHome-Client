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
    if (apartments) return prop.property_type.name === "Aparment";
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

export function filterProperties(properties, filter) {
  const { price, type, ambients, pets, area } = filter;
  console.log("initpropertes:", properties);
  console.log("FILTER:", filter);
  const filter1 = filteredByPrice(properties, price);
  console.log("FILTER PRICE", filter1);
  const filter2 = filteredByType(filter1, type);
  console.log("FILTER TYPE", filter2);
  const filter3 = filteredByAmbients(filter2, ambients);
  console.log("FILTER AMBIENTS", filter3);
  let filter4 = filter3;
  if (pets) {
    filter4 = filterPetsAllowed(filter4);
  }
  console.log("FILTER PETS", filter4);
  const filter5 = filteredByArea(filter4, area);
  console.log("FILTER AREA", filter5);
  console.log("FILTER--RESULT", filter5);
  return filter5;
}
