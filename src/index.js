import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/auth-context';
import { Global } from '@emotion/react';
import { global, reset } from './styles';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeContextProvider } from './context/theme-context';
import styled from '@emotion/styled';

const ContainerLoading = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center;
`;

setTimeout(loadingMain, 2000);
loadingPage();

function loadingPage() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <Global styles={global} />
      <Global styles={reset} />
      <ContainerLoading>
        <h1>Bienvenido a GetThatHome</h1>
      </ContainerLoading>
    </React.StrictMode>
  );
}

function loadingMain() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <ThemeContextProvider>
      <Global styles={global} />
      <Global styles={reset} />
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
