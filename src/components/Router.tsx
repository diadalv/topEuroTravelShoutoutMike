import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import TravelHomePage from '@/components/pages/TravelHomePage';
import AboutPage from '@/components/pages/AboutPage';
import DestinationsPage from '@/components/pages/DestinationsPage';
import ServicesPage from '@/components/pages/ServicesPage';
import MiceGroupsPage from '@/components/pages/MiceGroupsPage';
import ExperiencesPage from '@/components/pages/ExperiencesPage';
import ExcursionsPage from '@/components/pages/ExcursionsPage';
import ExcursionDetailPage from '@/components/pages/ExcursionDetailPage';
import ContactPage from '@/components/pages/ContactPage';
import AgentsPortalPage from '@/components/pages/AgentsPortalPage';
import { BlogPage, FaqPage, PrivacyPage, TermsPage } from '@/components/pages/InfoPages';
import { SiteFooter, SiteHeader } from '@/components/travel/Shared';

function Layout() {
  return (
    <div className="site-page">
      <ScrollToTop />
      <SiteHeader />
      <main id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
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
        { path: 'services', element: <ServicesPage />, routeMetadata: { pageIdentifier: 'services' } },
        { path: 'mice-groups', element: <MiceGroupsPage />, routeMetadata: { pageIdentifier: 'mice-groups' } },
        { path: 'experiences', element: <ExperiencesPage />, routeMetadata: { pageIdentifier: 'experiences' } },
        { path: 'excursions', element: <ExcursionsPage />, routeMetadata: { pageIdentifier: 'excursions' } },
        {
          path: 'excursions/lindos-south-rhodes-tour',
          element: <ExcursionDetailPage />,
          routeMetadata: { pageIdentifier: 'lindos-tour' },
        },
        { path: 'contact', element: <ContactPage />, routeMetadata: { pageIdentifier: 'contact' } },
        { path: 'agents-portal', element: <AgentsPortalPage />, routeMetadata: { pageIdentifier: 'agents-portal' } },
        { path: 'blog', element: <BlogPage />, routeMetadata: { pageIdentifier: 'blog' } },
        { path: 'faq', element: <FaqPage />, routeMetadata: { pageIdentifier: 'faq' } },
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

