import Footer from '@/components/Footer';
import AboutPage from '@/components/pages/AboutPage';
import BlogPage, { BlogPostPage } from '@/components/pages/BlogPage';
import BookingCalendarPage from '@/components/pages/BookingCalendarPage';
import BookingConfirmationPage from '@/components/pages/BookingConfirmationPage';
import BookingFormPage from '@/components/pages/BookingFormPage';
import ContactPage from '@/components/pages/ContactPage';
import DestinationsPage from '@/components/pages/DestinationsPage';
import ExcursionDetailPage from '@/components/pages/ExcursionDetailPage';
import ExcursionsPage from '@/components/pages/ExcursionsPage';
import ExperiencesPage from '@/components/pages/ExperiencesPage';
import FaqPage from '@/components/pages/FaqPage';
import { KosPage, RhodesPage } from '@/components/pages/IslandPages';
import { PrivacyPage, TermsPage } from '@/components/pages/LegalPages';
import MiceGroupsPage from '@/components/pages/MiceGroupsPage';
import ServicesPage from '@/components/pages/ServicesPage';
import TravelHomePage from '@/components/pages/TravelHomePage';
import { QuickContactRail, SiteHeader } from '@/components/travel/Shared';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import { ScrollToTop } from '@/lib/scroll-to-top';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';

function Layout() {
  return (
    <div className="site-page">
      <ScrollToTop />
      <SiteHeader />
      <main id="main-content"><Outlet /></main>
      <QuickContactRail />
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
        { path: 'experiences', element: <ExperiencesPage />, routeMetadata: { pageIdentifier: 'experiences' } },
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
        { path: 'blog', element: <BlogPage />, routeMetadata: { pageIdentifier: 'blog' } },
        { path: 'blog/:slug', element: <BlogPostPage />, routeMetadata: { pageIdentifier: 'blog-post' } },
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
