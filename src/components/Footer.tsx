import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading font-bold text-xl text-secondary-foreground mb-4">
              BRAND
            </h3>
            <p className="font-paragraph text-base text-secondary-foreground/80">
              Your trusted partner for quality and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-secondary-foreground mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="font-paragraph text-base text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-paragraph text-base text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-paragraph text-base text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg text-secondary-foreground mb-4">
              Connect
            </h4>
            <p className="font-paragraph text-base text-secondary-foreground/80">
              Stay connected with us for updates and news.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <p className="font-paragraph text-sm text-secondary-foreground/60 text-center">
            © {new Date().getFullYear()} BRAND. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
