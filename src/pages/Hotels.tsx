import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HotelCard from "@/components/HotelCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Sliders,
  Grid,
  List,
  Heart
} from "lucide-react";

const Hotels = () => {
  // Extended hotel data for the dedicated hotels page
  const allHotels = [
    {
      name: "Grand Ocean Resort",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
      rating: 4.8,
      reviewCount: 324,
      price: 299,
      originalPrice: 349,
      location: "Beachfront District",
      amenities: ["WiFi", "Pool", "Parking", "Breakfast"],
      isPopular: true,
      discount: 15
    },
    {
      name: "Downtown Business Hotel",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      rating: 4.6,
      reviewCount: 189,
      price: 179,
      location: "City Center",
      amenities: ["WiFi", "Parking", "Breakfast"],
    },
    {
      name: "Mountain View Lodge",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
      rating: 4.9,
      reviewCount: 156,
      price: 249,
      originalPrice: 279,
      location: "Mountain District",
      amenities: ["WiFi", "Pool", "Breakfast"],
      discount: 10
    },
    {
      name: "Historic Boutique Inn",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
      rating: 4.7,
      reviewCount: 98,
      price: 199,
      location: "Historic Quarter",
      amenities: ["WiFi", "Parking", "Breakfast"],
    },
    {
      name: "Luxury Spa Resort",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
      rating: 4.9,
      reviewCount: 267,
      price: 399,
      originalPrice: 459,
      location: "Wellness District",
      amenities: ["WiFi", "Pool", "Parking", "Breakfast"],
      isPopular: true,
      discount: 12
    },
    {
      name: "Family-Friendly Resort",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
      rating: 4.5,
      reviewCount: 445,
      price: 219,
      location: "Family Zone",
      amenities: ["WiFi", "Pool", "Parking"],
    },
    {
      name: "Seaside Villa Collection",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
      rating: 4.8,
      reviewCount: 203,
      price: 359,
      originalPrice: 399,
      location: "Coastal Area",
      amenities: ["WiFi", "Pool", "Parking", "Breakfast"],
      discount: 10
    },
    {
      name: "Urban Chic Hotel",
      image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=400",
      rating: 4.6,
      reviewCount: 312,
      price: 189,
      location: "Design District",
      amenities: ["WiFi", "Parking", "Breakfast"],
    },
    {
      name: "Riverside Retreat",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      rating: 4.7,
      reviewCount: 178,
      price: 269,
      location: "Riverside",
      amenities: ["WiFi", "Pool", "Breakfast"],
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Find Your Perfect Hotel</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover exceptional accommodations in our beautiful destination. 
              From luxury resorts to boutique hotels, we have something for everyone.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <Card className="max-w-6xl mx-auto p-6 bg-background/95 backdrop-blur-sm border-0 shadow-2xl animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search hotels..." 
                    className="pl-10"
                  />
                </div>
              </div>
              <Input type="date" placeholder="Check-in" />
              <Input type="date" placeholder="Check-out" />
              <Button variant="booking" className="w-full">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Filters and Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card className="p-6 sticky top-4">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Under $200</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$200 - $300</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">$300+</span>
                  </label>
                </div>
              </div>

              {/* Hotel Type */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Hotel Type</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Luxury</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Business</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Family</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Boutique</span>
                  </label>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Amenities</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">WiFi</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Pool</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Parking</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Breakfast</span>
                  </label>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Clear Filters
              </Button>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">Available Hotels</h2>
                <p className="text-muted-foreground">{allHotels.length} properties found</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="px-3 py-1 border border-border rounded-md bg-background">
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                    <option>Rating</option>
                    <option>Popularity</option>
                  </select>
                </div>
                <div className="flex border border-border rounded-md">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Hotel Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allHotels.map((hotel, index) => (
                <div 
                  key={index} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <HotelCard {...hotel} />
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="booking" size="lg">
                Load More Hotels
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Hotels;