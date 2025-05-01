"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Heart, MapPin, Users } from "lucide-react";

interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
  ageGroup: string;
  isAdvanced: boolean;
  spotsLeft: number;
  totalAttending: number;
  maxAttendees: number;
  price: number;
  isFavorite: boolean;
}

export default function EventCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      title: "Legends Rise on the Field",
      image: "/field1.png",
      date: "Thu, Dec 5",
      time: "12:30AM - 12:30PM",
      location: "Bashundhara Sports Complex",
      category: "Football",
      ageGroup: "Below 25y",
      isAdvanced: true,
      spotsLeft: 2,
      totalAttending: 6,
      maxAttendees: 8,
      price: 320,
      isFavorite: false,
    },
    {
      id: "2",
      title: "Chasing Glory: Football Showdown",
      image: "/field2.png",
      date: "Thu, Dec 5",
      time: "12:30AM - 12:30PM",
      location: "Bashundhara Sports Complex",
      category: "Football",
      ageGroup: "Below 25y",
      isAdvanced: true,
      spotsLeft: 2,
      totalAttending: 6,
      maxAttendees: 8,
      price: 320,
      isFavorite: false,
    },
    {
      id: "3",
      title: "United We Play, United Win",
      image: "/field1.png",
      date: "Thu, Dec 5",
      time: "12:30AM - 12:30PM",
      location: "Bashundhara Sports Complex",
      category: "Football",
      ageGroup: "Below 25y",
      isAdvanced: true,
      spotsLeft: 2,
      totalAttending: 6,
      maxAttendees: 8,
      price: 320,
      isFavorite: false,
    },
    {
      id: "4",
      title: "Football Frenzy Tournament",
      image: "/field2.png",
      date: "Thu, Dec 5",
      time: "12:30AM - 12:30PM",
      location: "Bashundhara Sports Complex",
      category: "Football",
      ageGroup: "Below 25y",
      isAdvanced: true,
      spotsLeft: 2,
      totalAttending: 6,
      maxAttendees: 8,
      price: 320,
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (id: string) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, isFavorite: !event.isFavorite } : event
      )
    );
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount =
        direction === "left" ? -current.clientWidth : current.clientWidth;

      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mx-auto lg:px-20 px-10 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Other events you may like
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth scrollbar-hide"
        >
          <div className="flex space-x-4 pb-4 w-max">
            {events.map((event) => (
              <Card
                key={event.id}
                className="min-w-[550px] max-w-[550px] border rounded-4xl overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-[100px]">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 rounded-full"
                    onClick={() => toggleFavorite(event.id)}
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        event.isFavorite
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                    <span className="sr-only">Add to favorites</span>
                  </Button>
                </div>

                <CardContent className="p-4 flex-grow">
                  <div className="flex gap-2 mb-2">
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                    >
                      {event.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100"
                    >
                      {event.ageGroup}
                    </Badge>
                    <div className="ml-auto flex items-center text-xs text-green-600">
                      <div className="w-4 h-2 bg-green-200 rounded-full mr-1 relative">
                        <div className="absolute inset-0 w-3/4 h-full bg-green-500 rounded-full"></div>
                      </div>
                      Advanced
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-[#34735F] mb-2">
                    {event.title}
                  </h3>

                  <div className="text-sm text-gray-600 mb-1">
                    {event.date} • {event.time}
                  </div>

                  <div className="flex items-start mb-4">
                    <MapPin className="h-4 w-4 text-[#FF0000] mt-0.5 mr-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">
                      {event.location}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 border-t flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {event.totalAttending}/{event.maxAttendees} attending
                  </div>
                  <div className="font-bold text-gray-900">
                    <div className="text-sm font-medium text-[#AA3333]">
                      {event.spotsLeft} spots left
                    </div>
                    ৳ {event.price}
                    <span className="text-sm font-normal text-gray-600">
                      /person
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
