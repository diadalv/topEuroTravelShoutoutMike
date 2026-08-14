import { Image } from '@/components/ui/image';
import { useLocation, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MEDIA = {
  logo: 'https://static.wixstatic.com/media/c3c625_668b8529b08249c48f9a8667135d56b1~mv2.png',
} as const;

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Destinations', to: '/destinations', children: ['/rhodes', '/kos'] },
  { label: 'Services', to: '/services' },
  { label: 'MICE & Groups', to: '/mice-groups' },
  { label: 'Excursions', to: '/excursions', children: ['/excursions/:slug'] },
  { label: 'Blog', to: '/blog', children: ['/blog/:slug'] },
  { label: 'FAQ', to: '/faq' },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 26);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isNavItemActive = (item: typeof navItems[number]) => {
    if (pathname === item.to) return true;
    if (item.children) {
      return item.children.some(child => {
        if (child.includes(':')) {
          const pattern = child.replace(/:[^/]+/g, '[^/]+');
          const regex = new RegExp(`^${pattern}import { Image } from '@/components/ui/image';
import { useLocation, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MEDIA = {
  logo: 'https://static.wixstatic.com/media/c3c625_668b8529b08249c48f9a8667135d56b1~mv2.png',
} as const;

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Destinations', to: '/destinations', children: ['/rhodes', '/kos'] },
  { label: 'Services', to: '/services' },
  { label: 'MICE & Groups', to: '/mice-groups' },
  { label: 'Excursions', to: '/excursions', children: ['/excursions/:slug'] },
  { label: 'Blog', to: '/blog', children: ['/blog/:slug'] },
  { label: 'FAQ', to: '/faq' },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 26);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isNavItemActive = (item: typeof navItems[number]) => {
    if (pathname === item.to) return true;
    if (item.children) {
      return item.children.some(child => {
);
          return regex.test(pathname);
        }
        return pathname === child;
      });
    }
    return false;
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner flex items-center justify-between">
        <Link className="brand-link" to="/" aria-label="Home" onClick={closeMenu}>
          <Image src={MEDIA.logo} alt="Top Euro Travel" className="brand-logo" width={124} />
        </Link>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div className={`site-header__nav-wrap ${menuOpen ? 'is-open' : ''}`}>
          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item);
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={`main-nav__link ${isActive ? 'is-active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <div className="site-header__actions">
            <Link className="header-contact-btn" to="/contact" onClick={closeMenu}>
              Contact Us <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function PageSeo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
