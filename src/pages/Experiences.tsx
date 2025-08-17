import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Clock, 
  MapPin, 
  Star, 
  Users,
  Calendar,
  Heart,
  Share,
  Camera as CameraIcon
} from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      title: "Historic City Walking Tour",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
      duration: "3 hours",
      groupSize: "Max 12 people",
      price: 45,
      originalPrice: 55,
      rating: 4.9,
      reviewCount: 234,
      category: "Culture & History",
      highlights: ["Professional local guide", "Historic landmarks", "Photo opportunities", "Small group experience"],
      discount: 18
    },
    {
      title: "Sunset Beach Photography Tour",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
      duration: "2.5 hours",
      groupSize: "Max 8 people",
      price: 75,
      rating: 4.8,
      reviewCount: 189,
      category: "Photography",
      highlights: ["Professional photographer guide", "Equipment provided", "Stunning sunset views", "Photo editing tips"],
      isPopular: true
    },
    {
      title: "Local Food & Market Tour",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500",
      duration: "4 hours",
      groupSize: "Max 10 people",
      price: 85,
      originalPrice: 95,
      rating: 4.7,
      reviewCount: 156,
      category: "Food & Drink",
      highlights: ["Local market visit", "Traditional food tasting", "Cooking demonstration", "Recipe cards included"],
      discount: 10
    },
    {
      title: "Mountain Hiking Adventure",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500",
      duration: "6 hours",
      groupSize: "Max 15 people",
      price: 95,
      rating: 4.9,
      reviewCount: 203,
      category: "Adventure",
      highlights: ["Experienced guide", "Scenic viewpoints", "Lunch included", "All skill levels welcome"],
      isPopular: true
    },
    {
      title: "Art Gallery & Studio Tour",
      image: "https://images.unsplash.com/photo-1544967882-604311b96fdb?w=500",
      duration: "2 hours",
      groupSize: "Max 6 people",
      price: 35,
      rating: 4.6,
      reviewCount: 98,
      category: "Arts & Culture",
      highlights: ["Local artist studios", "Gallery exhibitions", "Meet the artists", "Art history insights"]
    },
    {
      title: "Wine Tasting Experience",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500",
      duration: "3.5 hours",
      groupSize: "Max 12 people",
      price: 120,
      originalPrice: 140,
      rating: 4.8,
      reviewCount: 267,
      category: "Food & Drink",
      highlights: ["Premium wine selection", "Cheese pairings", "Vineyard tour", "Sommelier guide"],
      discount: 15
    }
  ];

  const categories = ["All", "Culture & History", "Food & Drink", "Adventure", "Photography", "Arts & Culture"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Unforgettable Experiences</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Discover the authentic soul of our destination through curated local experiences. 
              From cultural tours to culinary adventures, create memories that last a lifetime.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                <Camera className="w-4 h-4 mr-2" />
                Photo Tours
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Small Groups
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Local Guides
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose from our carefully curated collection of authentic local experiences
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "booking" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover-lift">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Culture & History</h3>
            <p className="text-muted-foreground text-sm">
              Immerse yourself in centuries of rich heritage through guided tours of ancient landmarks, museums, and historical districts. Discover untold stories and hidden architectural gems.
            </p>
          </Card>
          
          <Card className="p-6 hover-lift">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Food & Drink</h3>
            <p className="text-muted-foreground text-sm">
              Savor authentic local flavors through market tours, cooking classes, and wine tastings. Experience the culinary traditions passed down through generations.
            </p>
          </Card>
          
          <Card className="p-6 hover-lift">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Adventure</h3>
            <p className="text-muted-foreground text-sm">
              Challenge yourself with thrilling outdoor activities from mountain hiking to water sports. Perfect for adrenaline seekers and nature lovers alike.
            </p>
          </Card>
          
          <Card className="p-6 hover-lift">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Photography</h3>
            <p className="text-muted-foreground text-sm">
              Capture stunning moments with professional photography tours. Learn techniques while exploring the most photogenic spots at golden hour.
            </p>
          </Card>
          
          <Card className="p-6 hover-lift">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Arts & Culture</h3>
            <p className="text-muted-foreground text-sm">
              Explore local art scenes through gallery visits, artist studio tours, and hands-on workshops. Meet creators and learn traditional crafts.
            </p>
          </Card>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-booking hover-lift group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {experience.isPopular && (
                    <Badge className="bg-accent text-accent-foreground">
                      Most Popular
                    </Badge>
                  )}
                  {experience.discount && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      -{experience.discount}%
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <Button variant="ghost" size="sm" className="w-8 h-8 rounded-full bg-background/80 hover:bg-background p-0">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="w-8 h-8 rounded-full bg-background/80 hover:bg-background p-0">
                    <Share className="w-4 h-4" />
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <Badge variant="secondary" className="bg-background/90">
                    {experience.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title & Rating */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors leading-tight">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-sm">{experience.rating}</span>
                    <span className="text-muted-foreground text-xs">({experience.reviewCount})</span>
                  </div>
                </div>

                {/* Duration & Group Size */}
                <div className="flex gap-4 text-muted-foreground text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {experience.groupSize}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {experience.highlights.slice(0, 4).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Book Button */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2">
                      {experience.originalPrice && (
                        <span className="text-muted-foreground line-through text-sm">
                          ${experience.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary">
                        ${experience.price}
                      </span>
                      <span className="text-muted-foreground text-sm">/ person</span>
                    </div>
                  </div>
                  <Button variant="booking">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Our Experiences */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-12 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Choose Our Experiences?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We partner with local experts to bring you authentic, memorable experiences that showcase the true spirit of our destination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Expert Local Guides</h4>
              <p className="text-muted-foreground">
                Our experienced local guides share insider knowledge and hidden gems you won't find in guidebooks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Small Group Sizes</h4>
              <p className="text-muted-foreground">
                Intimate group sizes ensure personalized attention and a more meaningful experience for everyone.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Flexible Booking</h4>
              <p className="text-muted-foreground">
                Easy booking with free cancellation up to 24 hours before your experience starts.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="booking" size="lg" className="px-8 py-4 text-lg">
            <CameraIcon className="w-5 h-5 mr-2" />
            Explore All Experiences
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experiences;