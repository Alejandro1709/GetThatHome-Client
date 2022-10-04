import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Global } from "@emotion/react";
import { global, reset } from "./styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropertiesPage from "./pages/PropertiesPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./components/LandingPage";
import PropertyDetailPage from "./pages/property-detail-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global styles={global} />
    <Global styles={reset} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/properties"
          element={<h1>Properties List View Page</h1>}
        />
        <Route path="/properties" element={<PropertiesPage />} />
        {/* For the route property detail page add the id of the property */}
        <Route path="/properties/1" element={<PropertyDetailPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/myproperties"
          element={<h1>Landlord Properties Page</h1>}
        />
        <Route path="/saved" element={<h1>Homeseeker Properties Page</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
