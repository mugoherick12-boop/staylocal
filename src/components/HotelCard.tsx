import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Wifi, 
  Car, 
  Coffee, 
  Waves,
  Heart,
  Info
} from "lucide-react";

interface HotelCardProps {
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  location: string;
  amenities: string[];
  isPopular?: boolean;
  discount?: number;
}

const HotelCard = ({ 
  name, 
  image, 
  rating, 
  reviewCount, 
  price, 
  originalPrice, 
  location, 
  amenities,
  isPopular,
  discount 
}: HotelCardProps) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'breakfast':
        return <Coffee className="w-4 h-4" />;
      case 'pool':
        return <Waves className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  return (
    <Card className="card-booking hover-lift group overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isPopular && (
            <Badge className="bg-accent text-accent-foreground">
              Popular Choice
            </Badge>
          )}
          {discount && (
            <Badge className="bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button 
          variant="ghost" 
          size="sm"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 hover:bg-background p-0"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        {/* Hotel Name & Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-muted-foreground text-sm">({reviewCount})</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <MapPin className="w-4 h-4" />
          {location}
        </div>

        {/* Amenities */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {amenities.slice(0, 4).map((amenity, index) => (
            <div key={index} className="flex items-center gap-1 text-muted-foreground text-sm">
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        {/* Price & Book Button */}
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              {originalPrice && (
                <span className="text-muted-foreground line-through text-sm">
                  ${originalPrice}
                </span>
              )}
              <span className="text-2xl font-bold text-primary">
                ${price}
              </span>
              <span className="text-muted-foreground text-sm">/ night</span>
            </div>
          </div>
          <Button variant="booking">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;