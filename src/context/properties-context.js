import { createContext, useContext, useEffect, useState } from "react";
import { getProperties } from "../services/properties-service";

const PropertiesContext = createContext();

function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties()
      .then((data) => {
        setProperties(data);
      })
      .catch(console.log);
  }, []);

  function propertiesWithBestPrices() {
    const sort_by_cost = (a, b) => {
      const getCost = (prop) =>
        prop.operation_type.price || prop.operation_type.monthly_rent;
      return getCost(a) - getCost(b);
    };
    return properties.sort(sort_by_cost).slice(0, 3);
  }

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        bestProps: propertiesWithBestPrices(),
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
