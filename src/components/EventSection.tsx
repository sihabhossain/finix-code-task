"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

export default function EventSection() {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <section className="w-full pt-10 px-20 bg-[#F4F5EF]">
      {/* Top Section with Images */}
      <div className="grid grid-cols-[7fr_3fr] gap-2 mb-4 w-full h-[360px]">
        {/* Main Image - Left Side (70%) */}
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src="/photo1.png"
            alt="Football field at night"
            layout="fill"
            className="object-cover"
          />
        </div>

        {/* Right Side Column (30%) */}
        <div className="grid grid-rows-2 gap-2 w-full h-full">
          {/* Top Right Image */}
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/photo2.png"
              alt="Football event"
              layout="fill"
              className="object-cover"
            />
          </div>

          {/* Bottom Right Image with +2 photos */}
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium text-lg">
              +2 photos
            </div>
            <Image
              src="/photo3.png"
              alt="Football event"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Event Title and Actions */}
      <div className="flex justify-between items-start mb-1">
        <div>
          <h1 className="text-2xl font-bold">Road to the Football Finals</h1>
          <p className="text-sm text-gray-600">Bashundhara Sports Complex</p>
          <p className="text-sm text-gray-600">Mar 14 from 7:30 PM - 9:30 PM</p>
        </div>
        <div className="flex items-start gap-4">
          <div className="text-right">
            <p className="text-xs text-rose-500">6 spots left</p>
            <p className="font-bold text-sm">320k/player</p>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6">
            Join event
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
          <Heart className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6">
        <Tabs
          defaultValue="info"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <TabsList className="w-full grid grid-cols-3 h-auto bg-transparent">
            <TabsTrigger
              value="info"
              className={cn(
                "py-2.5 rounded-none data-[state=active]:bg-transparent",
                activeTab === "info" ? "border-b-2 border-black" : ""
              )}
            >
              Info
            </TabsTrigger>
            <TabsTrigger
              value="player"
              className={cn(
                "py-2.5 rounded-none data-[state=active]:bg-transparent",
                activeTab === "player" ? "border-b-2 border-black" : ""
              )}
            >
              Player
            </TabsTrigger>
            <TabsTrigger
              value="comments"
              className={cn(
                "py-2.5 rounded-none data-[state=active]:bg-transparent",
                activeTab === "comments" ? "border-b-2 border-black" : ""
              )}
            >
              Comments
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Tab Content */}
      <div className="mb-8">
        {activeTab === "info" && (
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge
                variant="outline"
                className="bg-teal-50 text-teal-700 hover:bg-teal-50 rounded-full"
              >
                Football
              </Badge>
              <Badge
                variant="outline"
                className="bg-blue-50 text-blue-700 hover:bg-blue-50 rounded-full"
              >
                Relay
              </Badge>
              <Badge
                variant="outline"
                className="bg-pink-50 text-pink-700 hover:bg-pink-50 rounded-full"
              >
                Female
              </Badge>
              <Badge
                variant="outline"
                className="bg-purple-50 text-purple-700 hover:bg-purple-50 rounded-full"
              >
                Age: Below 25
              </Badge>
              <div className="flex items-center gap-2 ml-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Beginner</span>
              </div>
            </div>

            {/* About this event */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">About this event</h2>
              <p className="text-sm text-gray-700 mb-2">
                Learn about the beautiful final journey to NCR which uses the
                Eating-Burger project. After your join, you will be able to
                access the full details of the event. The event is open to all
                beginners to pro level who are interested in football's
                high-level strategy.
              </p>
              <button className="text-sm text-blue-600">Read more</button>
            </div>

            {/* Location */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">Location</h2>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">NCE Field</p>
                  <p className="text-sm text-gray-600">
                    Jalan Republik Persija Selatan, Lake Shore Drive, Chicago,
                    Illinois
                  </p>
                </div>
                <Button variant="outline" size="sm" className="rounded-full">
                  Open map
                </Button>
              </div>
            </div>

            {/* Good to know */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2">Good to know</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-100 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Highlights</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 2 days, 2 hrs</li>
                    <li>• First day: 12:30-4:30</li>
                    <li>• Second day: 10:00-6:00</li>
                    <li>• Meals & drinks included</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">
                    Refund & cancellation policy
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>• Full refund if booked within 24 hours</li>
                    <li>• Full refund if you cancel 24h+ before the event</li>
                    <li>
                      • Full refund if game is cancelled due to bad
                      weather/pitch
                    </li>
                  </ul>
                  <p className="text-xs text-right mt-2">Learn more</p>
                </div>
              </div>
            </div>

            {/* Hosted by */}
            <div>
              <h2 className="text-lg font-bold mb-2">Hosted by</h2>
              <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Alice Mercer"
                    />
                  </Avatar>
                  <div>
                    <p className="font-medium">Alice Mercer</p>
                    <p className="text-xs text-gray-600">5 events hosted</p>
                    <p className="text-xs text-gray-600">8.5 avg rating</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Message
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    View profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "player" && (
          <div className="prose max-w-none">
            <h3>Player Information</h3>
            <p>
              This event is open to female players below the age of 25. Players
              of all skill levels are welcome, but the event is particularly
              designed for beginners.
            </p>

            <h4>What to bring:</h4>
            <ul>
              <li>Comfortable sportswear</li>
              <li>Football boots (optional)</li>
              <li>Water bottle</li>
              <li>Positive attitude</li>
            </ul>

            <h4>Team Formation:</h4>
            <p>
              Teams will be formed on the day of the event. You can register as
              an individual or as a group of friends.
            </p>
          </div>
        )}

        {activeTab === "comments" && (
          <div className="space-y-4">
            <p className="text-muted-foreground text-center py-8">
              No comments yet. Be the first to comment!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
