import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Calendar, 
  Star, 
  Eye,
  DollarSign,
  Settings,
  Plus
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HotelPartner = () => {
  // Demo hotel partner data
  const partner = {
    name: "Grand Paradise Resort",
    contact: "Sarah Johnson",
    email: "sarah@grandparadise.com",
    memberSince: "2022",
    totalRooms: 124,
    avatar: "/placeholder.svg"
  };

  // Demo analytics data
  const analytics = {
    totalBookings: 342,
    revenue: 85670,
    occupancyRate: 78,
    averageRating: 4.6,
    monthlyGrowth: 12
  };

  // Demo recent bookings
  const recentBookings = [
    {
      id: 1,
      guest: "John Smith",
      room: "Deluxe Ocean View",
      checkIn: "2024-08-15",
      checkOut: "2024-08-18",
      amount: 450,
      status: "confirmed"
    },
    {
      id: 2,
      guest: "Emma Wilson",
      room: "Standard Room",
      checkIn: "2024-08-14",
      checkOut: "2024-08-16",
      amount: 240,
      status: "checked-in"
    },
    {
      id: 3,
      guest: "Michael Brown",
      room: "Suite Premium",
      checkIn: "2024-08-13",
      checkOut: "2024-08-15",
      amount: 680,
      status: "checked-out"
    }
  ];

  // Demo room inventory
  const roomInventory = [
    {
      type: "Standard Room",
      total: 50,
      available: 32,
      price: 120
    },
    {
      type: "Deluxe Ocean View",
      total: 40,
      available: 18,
      price: 180
    },
    {
      type: "Suite Premium",
      total: 24,
      available: 12,
      price: 280
    },
    {
      type: "Presidential Suite",
      total: 10,
      available: 8,
      price: 450
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Hotel Partner Dashboard</h1>
          <p className="text-muted-foreground">Manage your property and track performance</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={partner.avatar} alt={partner.name} />
                    <AvatarFallback><Building2 className="h-8 w-8" /></AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="font-semibold">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.contact}</p>
                    <p className="text-xs text-muted-foreground">{partner.email}</p>
                    <Badge variant="secondary" className="mt-2">
                      Partner since {partner.memberSince}
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Building2 className="mr-2 h-4 w-4" />
                    Property Details
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="booking" className="w-full justify-start">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Room
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="rooms">Room Management</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Total Bookings</p>
                          <p className="text-2xl font-bold">{analytics.totalBookings}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Revenue</p>
                          <p className="text-2xl font-bold">${analytics.revenue.toLocaleString()}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Occupancy Rate</p>
                          <p className="text-2xl font-bold">{analytics.occupancyRate}%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Average Rating</p>
                          <p className="text-2xl font-bold">{analytics.averageRating}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Performance Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Performance Overview
                    </CardTitle>
                    <CardDescription>Your hotel's performance this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Occupancy Rate</span>
                          <span>{analytics.occupancyRate}%</span>
                        </div>
                        <Progress value={analytics.occupancyRate} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Customer Satisfaction</span>
                          <span>{analytics.averageRating}/5.0</span>
                        </div>
                        <Progress value={(analytics.averageRating / 5) * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Monthly Growth</span>
                          <span>+{analytics.monthlyGrowth}%</span>
                        </div>
                        <Progress value={analytics.monthlyGrowth * 5} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bookings" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>Latest reservations for your property</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentBookings.map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{booking.guest}</h4>
                            <p className="text-sm text-muted-foreground">{booking.room}</p>
                            <p className="text-xs text-muted-foreground">
                              {booking.checkIn} - {booking.checkOut}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${booking.amount}</p>
                            <Badge 
                              variant={
                                booking.status === 'confirmed' ? 'default' :
                                booking.status === 'checked-in' ? 'secondary' : 'outline'
                              }
                            >
                              {booking.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="rooms" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Room Inventory</CardTitle>
                    <CardDescription>Manage your room types and availability</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {roomInventory.map((room, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{room.type}</h4>
                            <p className="text-sm text-muted-foreground">
                              {room.available} available of {room.total} total
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${room.price}/night</p>
                            <div className="flex gap-2 mt-2">
                              <Button size="sm" variant="outline">
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                              <Button size="sm" variant="outline">
                                <Settings className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                    <CardDescription>Reviews and ratings from your guests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center py-8">
                        <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">No reviews to display yet.</p>
                        <p className="text-sm text-muted-foreground">Guest reviews will appear here after their stays.</p>
                      </div>
                    </div>
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

export default HotelPartner;