import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.jsx';
import { AppProvider } from './src/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
