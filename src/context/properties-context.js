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

  return (
    <PropertiesContext.Provider
      value={{
        properties,
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
