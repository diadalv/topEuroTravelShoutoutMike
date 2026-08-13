import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import TravelHomePage from '@/components/pages/TravelHomePage';
import AboutPage from '@/components/pages/AboutPage';
import DestinationsPage from '@/components/pages/DestinationsPage';
import { RhodesPage, KosPage } from '@/components/pages/IslandPages';
import ServicesPage from '@/components/pages/ServicesPage';
import MiceGroupsPage from '@/components/pages/MiceGroupsPage';
import ExcursionsPage from '@/components/pages/ExcursionsPage';
import ExcursionDetailPage from '@/components/pages/ExcursionDetailPage';
import BookingCalendarPage from '@/components/pages/BookingCalendarPage';
import BookingFormPage from '@/components/pages/BookingFormPage';
import BookingConfirmationPage from '@/components/pages/BookingConfirmationPage';
import FaqPage from '@/components/pages/FaqPage';
import ContactPage from '@/components/pages/ContactPage';
import { PrivacyPage, TermsPage } from '@/components/pages/LegalPages';
import Footer from '@/components/Footer';
import { SiteHeader } from '@/components/travel/Shared';

function Layout() {
  return (
    <div className="site-page">
      <ScrollToTop />
      <SiteHeader />
      <main id="main-content"><Outlet /></main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <TravelHomePage />, routeMetadata: { pageIdentifier: 'home' } },
        { path: 'about', element: <AboutPage />, routeMetadata: { pageIdentifier: 'about' } },
        { path: 'destinations', element: <DestinationsPage />, routeMetadata: { pageIdentifier: 'destinations' } },
        { path: 'rhodes', element: <RhodesPage />, routeMetadata: { pageIdentifier: 'rhodes' } },
        { path: 'kos', element: <KosPage />, routeMetadata: { pageIdentifier: 'kos' } },
        { path: 'services', element: <ServicesPage />, routeMetadata: { pageIdentifier: 'services' } },
        { path: 'mice-groups', element: <MiceGroupsPage />, routeMetadata: { pageIdentifier: 'mice-groups' } },
        { path: 'excursions', element: <ExcursionsPage />, routeMetadata: { pageIdentifier: 'excursions' } },
        {
          path: 'excursions/:slug',
          element: <ExcursionDetailPage />,
          routeMetadata: { pageIdentifier: 'excursion-detail' },
        },
        {
          path: 'booking-calendar/:serviceSlug',
          element: <BookingCalendarPage />,
          routeMetadata: { pageIdentifier: 'booking-calendar' },
        },
        {
          path: 'booking-form/:serviceSlug',
          element: <BookingFormPage />,
          routeMetadata: { pageIdentifier: 'booking-form' },
        },
        {
          path: 'booking-confirmation',
          element: <BookingConfirmationPage />,
          routeMetadata: { pageIdentifier: 'booking-confirmation' },
        },
        { path: 'faq', element: <FaqPage />, routeMetadata: { pageIdentifier: 'faq' } },
        { path: 'contact', element: <ContactPage />, routeMetadata: { pageIdentifier: 'contact' } },
        { path: 'privacy', element: <PrivacyPage />, routeMetadata: { pageIdentifier: 'privacy' } },
        { path: 'terms', element: <TermsPage />, routeMetadata: { pageIdentifier: 'terms' } },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_NAME },
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}