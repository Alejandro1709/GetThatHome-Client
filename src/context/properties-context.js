import { createContext, useContext, useEffect, useState } from "react";
import { getProperties } from "../services/properties-service";
import { getPropertyTypes } from "../services/property-types-service";

const PropertiesContext = createContext();

function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [preferences, setPreferences] = useState({
    looking: "",
    wanting: "",
    location: {
      whereing: "",
      coordinates: {
        lat: null,
        lng: null,
      },
    },
  });
  const [types, setTypes] = useState([]);
  useEffect(() => {
    getProperties()
      .then((data) => {
        setProperties(data);
      })
      .catch(console.log);
    getPropertyTypes()
      .then((data) => {
        setTypes(data);
      })
      .catch(console.log);
  }, []);

  function changePreferences(config) {
    setPreferences(config);
  }

  function propertiesWithBestPrices() {
    const sort_by_cost = (a, b) => {
      const getCost = (prop) =>
        prop.operation_type.price || prop.operation_type.monthly_rent;
      return getCost(a) - getCost(b);
    };
    return properties.sort(sort_by_cost).slice(0, 3);
  }

  const propsByPreferences = properties.filter((property) => {
    const { lat, lng } = preferences.location.coordinates;
    const cond1 = property.operation_type.type === `for ${preferences.wanting}`;
    const cond2 =
      property.property_type.name.toLowerCase() === preferences.looking;
    const cond3 = lat
      ? Math.ceil(+property.address.latitude) === Math.ceil(lat)
      : true;
    const cond4 = lat
      ? Math.ceil(+property.address.longitude) === Math.ceil(lng)
      : true;
    return cond1 && cond2 && cond3 && cond4;
  });

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        bestProps: propertiesWithBestPrices(),
        propertyTypes: types,
        propsByPreferences,
        changePreferences,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

function useProperties() {
  return useContext(PropertiesContext);
}

export { PropertiesProvider, useProperties };
