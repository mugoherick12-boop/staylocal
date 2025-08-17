import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Award, 
  Heart, 
  Clock, 
  Star,
  Mail,
  Phone,
  Building,
  Target,
  CheckCircle,
  Globe
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Partner Hotels", icon: Building },
    { number: "10K+", label: "Happy Guests", icon: Users },
    { number: "5", label: "Years Experience", icon: Clock },
    { number: "95%", label: "Satisfaction Rate", icon: Star }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b077?w=300",
      bio: "Travel enthusiast with 15+ years in hospitality industry"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
      bio: "Expert in hotel management and guest experience optimization"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
      bio: "Passionate about creating memorable travel experiences"
    },
    {
      name: "David Park",
      role: "Technology Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
      bio: "Building the future of travel technology and innovation"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Guest-Centric Approach",
      description: "Every decision we make is focused on enhancing our guests' experience and creating lasting memories."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "We maintain the highest standards by carefully vetting all our partner hotels and experiences."
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Our deep local knowledge helps guests discover authentic experiences and hidden gems."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We're committed to providing exceptional service and support throughout your journey."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Redefining Local Hospitality
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              StayLocal was born from a simple belief: every traveler deserves to experience 
              the authentic heart of a destination through exceptional local accommodations 
              and unforgettable experiences.
            </p>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="text-left text-muted-foreground space-y-6">
              <p className="text-lg">
                Founded in 2018 by travel enthusiasts Maria Santos and David Chen, our platform began as a simple idea: 
                to create authentic connections between travelers and local communities while supporting sustainable tourism.
              </p>
              <p>
                What started as a small collection of 12 boutique hotels in our home city has grown into a comprehensive 
                travel platform featuring over 150 carefully curated accommodations and 200+ unique local experiences. 
                Our journey has been driven by a passion for showcasing the authentic character of our destination.
              </p>
              <p>
                We believe that travel should be more than just visiting places—it should be about creating meaningful 
                connections, supporting local businesses, and preserving the cultural heritage that makes each destination 
                unique. Every hotel partner and experience provider in our network shares this vision.
              </p>
              <p>
                Today, we're proud to have facilitated over 50,000 bookings, supported more than 300 local businesses, 
                and helped travelers create countless unforgettable memories. Our story continues to evolve with every 
                guest who chooses to explore with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mission */}
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To connect travelers with exceptional local accommodations and authentic experiences 
                  that showcase the true spirit of our beautiful destination. We believe that the best 
                  travel memories are created when visitors can immerse themselves in local culture 
                  and hospitality.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through our carefully curated selection of hotels and experiences, we make it easy 
                  for guests to discover the hidden gems and local favorites that make our destination special.
                </p>
              </div>

              {/* Vision */}
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To become the most trusted platform for local hospitality, where every guest 
                  feels at home and every stay contributes to the vibrant tapestry of our community. 
                  We envision a future where travel strengthens local economies and cultural connections.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By 2030, we aim to be the premier destination for travelers seeking authentic, 
                  sustainable, and memorable local experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do, from selecting hotel partners 
              to crafting exceptional guest experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="card-booking hover-lift p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate professionals dedicated to making your stay exceptional. 
              Our diverse team brings together expertise in hospitality, technology, and local culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="card-booking hover-lift overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground">
                Have questions about your stay or interested in partnering with us? 
                We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <Card className="card-booking p-6 text-center animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  For general inquiries and support
                </p>
                <p className="text-primary font-medium">info@staylocal.com</p>
              </Card>

              <Card className="card-booking p-6 text-center animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  24/7 customer support available
                </p>
                <p className="text-primary font-medium">+1 (555) 123-4567</p>
              </Card>

              <Card className="card-booking p-6 text-center animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-4">
                  Our headquarters in the heart of the city
                </p>
                <p className="text-primary font-medium">123 Main Street<br />Beautiful City</p>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="booking" size="lg" className="px-8 py-4 text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;