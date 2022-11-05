export function filterByPrice(properties, { min, max }) {
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

export function filterByType(properties, { apartments, houses }) {
  if (!apartments && !houses) return properties;
  if (apartments && houses) return properties;
  return properties.filter((prop) => {
    if (apartments) return prop.property_type.name === "Apartment";
    if (houses) return prop.property_type.name === "House";
  });
}

export function filterByAmbients(properties, { beds, baths }) {
  if (!beds && !baths) return properties;
  return properties.filter((prop) => {
    return prop.bedrooms >= beds && prop.bathrooms >= baths;
  });
}

export function filterByArea(properties, { min, max }) {
  if (!min && !max) return properties;
  return properties.filter((prop) => +prop.area >= (+min||0) && +prop.area <= (+max||Infinity));
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

export function filterByAddress(properties, latitude, longitude) {
  if (!latitude || !longitude) return properties;
  return properties.filter((prop) => {
    console.log("LAT:", prop.address.latitude, latitude);
    console.log("LNG:", prop.address.longitude, longitude);
    return (
      Math.ceil(+prop.address.latitude) === Math.ceil(+latitude) &&
      Math.ceil(+prop.address.longitude) === Math.ceil(+longitude)
    );
  });
}

export function filterProperties(properties, filters) {
  // const { price, type, ambients, pets, area, op_type, address } = filters;
  const { price, ambients, pets, area } = filters;
  // const filter0 = filterByAddress(
  //   properties,
  //   address.latitude,
  //   address.longitude
  // );
  const filter1 = filterByPrice(properties, price);
  // const filter2 = filterByType(filter1, type);
  const filter3 = filterByAmbients(filter1, ambients);
  let filter4 = filter3;
  if (pets) {
    filter4 = filterPetsAllowed(filter4);
  }
  return filterByArea(filter4, area);
  // return filterByOpType(filter5, op_type);
}
