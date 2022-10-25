import { createContext, useContext, useEffect, useState } from "react";
import { getProperties } from "../services/properties-service";
import { getPropertyTypes } from "../services/property-types-service";

const PropertiesContext = createContext();
const defaultPreferences = {
  looking: "all",
  wanting: "all",
  location: {
    whereing: "",
    coordinates: {
      lat: null,
      lng: null,
    },
  },
};
function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [types, setTypes] = useState([]);
  const [preferences, setPreferences] = useState(defaultPreferences);

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
    const cond1 =
      property.operation_type.type === `for ${preferences.wanting}` ||
      preferences.wanting === "all";
    const cond2 =
      property.property_type.name === preferences.looking ||
      preferences.looking === "all";
    const cond3 = lat
      ? Math.ceil(+property.address.latitude) === Math.ceil(lat)
      : true;
    const cond4 = lng
      ? Math.ceil(+property.address.longitude) === Math.ceil(lng)
      : true;
    const cond5 = property.active;
    return cond1 && cond2 && cond3 && cond4 && cond5;
  });

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        bestProps: propertiesWithBestPrices(),
        propertyTypes: types,
        propsByPreferences,
        changePreferences,
        preferences,
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
