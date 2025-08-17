import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Search } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Your Perfect
            <span className="block text-primary-light">Local Stay</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Experience the best hotels and accommodations in our beautiful destination. 
            Your perfect getaway awaits.
          </p>
        </div>

        {/* Search Box */}
        <Card className="animate-slide-up max-w-4xl mx-auto p-6 bg-background/95 backdrop-blur-sm border-0 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Destination
              </label>
              <div className="relative">
                <Input 
                  placeholder="Beautiful City" 
                  disabled
                  className="pl-3 bg-muted/50 border-border"
                  value="Our Exclusive Location"
                />
              </div>
            </div>

            {/* Check-in */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Check-in
              </label>
              <Input 
                type="date" 
                className="border-border"
              />
            </div>

            {/* Check-out */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Check-out
              </label>
              <Input 
                type="date" 
                className="border-border"
              />
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center">
                <Users className="w-4 h-4 mr-1" />
                Guests
              </label>
              <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </div>

          <Button variant="booking" size="lg" className="w-full md:w-auto mt-6 px-8 py-3 text-lg">
            <Search className="w-5 h-5 mr-2" />
            Search Hotels
          </Button>
        </Card>

        {/* Stats */}
        <div className="animate-fade-in grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-primary-light">50+</div>
            <div className="text-gray-300">Hotels</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-light">10K+</div>
            <div className="text-gray-300">Happy Guests</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-light">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-light">95%</div>
            <div className="text-gray-300">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;