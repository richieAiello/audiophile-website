import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import { CartContextProvider } from './context/CartContext';
import './index.css';
import './styles/nav.css';
import './styles/shared.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <AppContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AppContextProvider>
  </StrictMode>
);
