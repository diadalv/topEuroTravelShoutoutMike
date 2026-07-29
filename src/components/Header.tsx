import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-primary/10">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-heading font-bold text-2xl text-foreground">
            BRAND
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <button className="md:hidden font-paragraph text-base text-foreground">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
