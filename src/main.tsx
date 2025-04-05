import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import App from './App.tsx';
import './index.css';
import ProviderWrapper from './providerWrapper.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProviderWrapper>
      <App />
      <Toaster richColors={true} position="top-right" />
    </ProviderWrapper>
  </StrictMode>,
)
