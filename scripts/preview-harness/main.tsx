import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from '@/components/Router';
import '@/styles/travel.css';
import '@/styles/pages-about-destinations.css';
import '@/styles/pages-services-mice.css';
import '@/styles/pages-excursions.css';
import '@/styles/pages-experience-contact-agents.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
