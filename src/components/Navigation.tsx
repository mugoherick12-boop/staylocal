import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Hotel, 
  User, 
  Settings, 
  Menu, 
  X,
  Search,
  MapPin
} from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Hotel className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">StayLocal</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/hotels" className="text-foreground hover:text-primary transition-colors">
              Hotels
            </Link>
            <Link to="/experiences" className="text-foreground hover:text-primary transition-colors">
              Experiences
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* User Sections */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/client-dashboard">
              <Button variant="ghost" size="sm" className="text-booking-gray hover:text-primary">
                <User className="w-4 h-4 mr-2" />
                Client
              </Button>
            </Link>
            <Link to="/hotel-partner">
              <Button variant="ghost" size="sm" className="text-booking-gray hover:text-primary">
                <Hotel className="w-4 h-4 mr-2" />
                Hotel Partner
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="booking" size="sm">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/hotels" className="text-foreground hover:text-primary transition-colors">
                Hotels
              </Link>
              <Link to="/experiences" className="text-foreground hover:text-primary transition-colors">
                Experiences
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Link to="/client-dashboard">
                  <Button variant="ghost" size="sm" className="justify-start w-full">
                    <User className="w-4 h-4 mr-2" />
                    Client Portal
                  </Button>
                </Link>
                <Link to="/hotel-partner">
                  <Button variant="ghost" size="sm" className="justify-start w-full">
                    <Hotel className="w-4 h-4 mr-2" />
                    Hotel Partner
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="booking" className="mt-4 w-full">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;