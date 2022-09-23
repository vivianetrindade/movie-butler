import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
    domain="dev-u9kq7hje.us.auth0.com"
    clientId="3Qu6wTEbtADwKPYf5FvrfkyMjCu7hVgp"
    redirectUri={window.location.origin}
    >
        <App />
    </Auth0Provider>
);


