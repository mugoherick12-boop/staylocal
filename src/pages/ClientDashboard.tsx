import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, MapPin, Star, CreditCard, User, Settings, LogOut } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ClientDashboard = () => {
  // Demo user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "2023",
    totalBookings: 12,
    avatar: "/placeholder.svg"
  };

  // Demo bookings data
  const bookings = [
    {
      id: 1,
      hotel: "Grand Paradise Resort",
      location: "Downtown",
      checkIn: "2024-08-15",
      checkOut: "2024-08-18",
      status: "confirmed",
      amount: 450,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      hotel: "Ocean View Hotel",
      location: "Beachfront",
      checkIn: "2024-07-20",
      checkOut: "2024-07-23",
      status: "completed",
      amount: 320,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      hotel: "City Center Inn",
      location: "Business District",
      checkIn: "2024-06-10",
      checkOut: "2024-06-12",
      status: "completed",
      amount: 180,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {user.name}!</h1>
          <p className="text-muted-foreground">Manage your bookings and account preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <Badge variant="secondary" className="mt-2">
                      Member since {user.memberSince}
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="bookings" className="space-y-4">
              <TabsList>
                <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="bookings" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <CalendarDays className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Total Bookings</p>
                          <p className="text-2xl font-bold">{user.totalBookings}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Total Spent</p>
                          <p className="text-2xl font-bold">$2,350</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Loyalty Points</p>
                          <p className="text-2xl font-bold">1,240</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <Card key={booking.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/4 h-32 md:h-auto">
                            <img 
                              src={booking.image} 
                              alt={booking.hotel}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-lg font-semibold">{booking.hotel}</h3>
                                <p className="text-muted-foreground flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  {booking.location}
                                </p>
                              </div>
                              <Badge 
                                variant={booking.status === 'confirmed' ? 'default' : 'secondary'}
                              >
                                {booking.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Check-in</p>
                                <p className="font-medium">{booking.checkIn}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Check-out</p>
                                <p className="font-medium">{booking.checkOut}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Total</p>
                                <p className="font-medium">${booking.amount}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">View Details</Button>
                                {booking.status === 'confirmed' && (
                                  <Button size="sm" variant="destructive">Cancel</Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites">
                <Card>
                  <CardHeader>
                    <CardTitle>Favorite Hotels</CardTitle>
                    <CardDescription>Hotels you've saved for future bookings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">You haven't saved any hotels yet. Start exploring to add favorites!</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Reviews</CardTitle>
                    <CardDescription>Reviews you've written for your stays</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">No reviews yet. Leave a review after your next stay!</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ClientDashboard;