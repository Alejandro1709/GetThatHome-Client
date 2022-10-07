<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/auth-context";
import { Global } from "@emotion/react";
import { global, reset } from "./styles";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { global, reset } from './styles';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
>>>>>>> develop

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Global styles={global} />
    <Global styles={reset} />
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </>
);
