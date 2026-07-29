import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'EXPLORE',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'About Us', href: '#about' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'CONNECT',
      links: [
        { label: 'Newsletter', href: '#newsletter' },
        { label: 'Social Media', href: '#social' },
        { label: 'Careers', href: '#careers' },
        { label: 'Press', href: '#press' },
      ],
    },
    {
      title: 'LEGAL',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'Accessibility', href: '#accessibility' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-heading text-3xl lg:text-4xl uppercase tracking-tight text-secondary-foreground hover:text-primary transition-colors inline-block mb-6">
              LOGIN-VIBE-NEW
            </Link>
            <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
              Creating exceptional digital experiences with modern design and innovative solutions.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-xl uppercase tracking-tight text-secondary-foreground mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-paragraph text-base text-secondary-foreground/80 hover:text-primary transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-secondary-foreground/60">
              © {currentYear} LOGIN-VIBE-NEW. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#facebook"
                className="font-paragraph text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="#twitter"
                className="font-paragraph text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Twitter
              </a>
              <a
                href="#instagram"
                className="font-paragraph text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="#linkedin"
                className="font-paragraph text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
