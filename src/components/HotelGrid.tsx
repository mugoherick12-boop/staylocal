import HotelCard from "./HotelCard";
import { Button } from "@/components/ui/button";

const HotelGrid = () => {
  // Sample hotel data
  const hotels = [
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
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Featured Hotels</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional accommodations, 
            each offering unique experiences and world-class hospitality.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center animate-slide-up">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium">
            All Hotels
          </button>
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Luxury
          </button>
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Business
          </button>
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Family
          </button>
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Budget
          </button>
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
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
          <Button variant="booking" size="lg" className="px-8 py-3">
            View All Hotels
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HotelGrid;