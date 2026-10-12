import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

declare global {
  interface Window {
    __ANURAG_PORTFOLIO_MOUNTED__?: boolean;
  }
}

const rootEl = document.getElementById('root');
if (rootEl && !window.__ANURAG_PORTFOLIO_MOUNTED__) {
  window.__ANURAG_PORTFOLIO_MOUNTED__ = true;
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

