"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, MoreVertical, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventTabContent from "./TabContent";
import PaymentMethodModal from "./modals/PaymentModal";

export default function EventSection() {
  const [activeTab, setActiveTab] = useState<"info" | "player" | "comments">(
    "info"
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 mx-auto bg-[#F4F5EF] py-12">
      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-2 mb-4 w-full h-auto md:h-[360px]">
        <div className="relative w-full h-[200px] md:h-full rounded-lg overflow-hidden">
          <Image
            src="/photo1.png"
            alt="Football field at night"
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 grid-rows-1 md:grid-rows-2 gap-2 w-full h-[200px] md:h-full">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/photo2.png"
              alt="Football event"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium text-lg">
              +2 photos
            </div>
            <Image
              src="/photo3.png"
              alt="Football event"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Event Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="w-full flex justify-between lg:w-[70%]">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">
              Road to the Football Finals
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Bashundhara Sports Complex
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              Mar 14 from 7:30 PM - 9:30 PM
            </p>
          </div>
          <div className="flex items-start gap-2 mt-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-8 w-8"
            >
              <Upload className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-8 w-8"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-8 w-8"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Join Box */}
        <div className="w-full lg:w-[30%] flex justify-start lg:justify-end">
          <div className="w-full max-w-[400px] bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between border border-gray-200 rounded-2xl p-3 items-center mb-4">
              <span className="text-red-500 text-sm font-medium">
                6 spots left
              </span>
              <div className="text-right">
                <span className="text-black font-semibold">320tk</span>
                <span className="text-gray-500 text-sm">/player (both)</span>
              </div>
            </div>
            <div>
              <PaymentMethodModal />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="w-full lg:w-[70%] mt-8">
        <div className="border-b mb-6">
          <Tabs
            defaultValue="info"
            className="w-full"
            //@ts-ignore
            onValueChange={setActiveTab}
          >
            <TabsList className="w-full grid grid-cols-3 h-auto bg-transparent">
              <TabsTrigger
                value="info"
                className={cn(
                  "py-2.5 text-[18px] sm:text-[20px] rounded-none data-[state=active]:bg-transparent",
                  activeTab === "info" ? " text-[#DA6049]" : ""
                )}
              >
                Info
              </TabsTrigger>
              <TabsTrigger
                value="player"
                className={cn(
                  "py-2.5 text-[18px] sm:text-[20px] rounded-none data-[state=active]:bg-transparent",
                  activeTab === "player" ? " text-[#DA6049]" : ""
                )}
              >
                Player
              </TabsTrigger>
              <TabsTrigger
                value="comments"
                className={cn(
                  "py-2.5 text-[18px] sm:text-[20px] rounded-none data-[state=active]:bg-transparent",
                  activeTab === "comments" ? "text-[#DA6049]" : ""
                )}
              >
                Comments
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <EventTabContent activeTab={activeTab} />
      </div>
    </section>
  );
}
