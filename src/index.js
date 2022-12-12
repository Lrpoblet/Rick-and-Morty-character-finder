import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// en el futuro cuando tengas acceso a la configuración de tu servidor y puedas usar el sistema moderno de rutas, tienes que cambiar en este fichero la palabra HashRouter por BrowserRouter.
