import { createContext, useContext, useEffect, useState } from "react";
import { getProperties } from "../services/properties-service";
import { getPropertyTypes } from "../services/property-types-service";
import { getSavedProperties } from "../services/saved-properties-service";
import { useAuth } from "./auth-context";

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
  const { user } = useAuth();
  const [properties, setProperties] = useState([]);
  const [types, setTypes] = useState([]);
  const [savedProps, setSavedProps] = useState([]);
  const [preferences, setPreferences] = useState(defaultPreferences);
  const [reload, setReload] = useState(false);
  const [propertiesReload, setPropertiesReload] = useState(false);

  useEffect(() => {
    getPropertyTypes()
      .then((data) => {
        setTypes(data);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    getProperties()
      .then((data) => {
        setProperties(data);
      })
      .catch(console.log);
  }, [propertiesReload]);

  useEffect(() => {
    if (user?.role_name === "Homeseeker") {
      getSavedProperties()
        .then((data) => {
          setSavedProps(data);
        })
        .catch(console.log);
    }
  }, [user, reload]);

  function changePreferences(config) {
    setPreferences(config);
  }

  function changeToDefaultPreferences() {
    setPreferences(defaultPreferences);
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
      property.property_type.name.toLowerCase() ===
        preferences.looking.toLowerCase() || preferences.looking === "all";
    const cond3 = lat
      ? +property.address.latitude >= lat - 1 &&
        +property.address.latitude <= lat + 1
      : true;
    const cond4 = lng
      ? +property.address.longitude >= lng - 1 &&
        +property.address.longitude <= lng + 1
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
        preferences,
        savedProps,
        changeToDefaultPreferences,
        changeReload() {
          setReload(!reload);
        },
        changePropReload() {
          setPropertiesReload(!propertiesReload);
        },
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
