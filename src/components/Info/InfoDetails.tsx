import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Image from "next/image";

export default function EventDetails() {
  const [showFull, setShowFull] = useState(false);

  const fullDescription =
    "Learn about the capital's first beavers in 400 years from the Ealing Beaver project, make your own mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get into the nuts and bolts of tomorrow's high-rise buildings.";

  return (
    <div className="mx-auto p-4 bg-[#f5f5f0]">
      {/* Tags */}
      <div className="flex flex-wrap justify-between gap-2 mb-8">
        <div>
          <Badge
            variant="outline"
            className="bg-[#e6f7f7] text-[20px] rounded-3xl hover:bg-[#d6f0f0] px-6 py-2 border-none text-gray-700"
          >
            Football
          </Badge>
          <Badge
            variant="outline"
            className="bg-[#e6f7f7] text-[20px] rounded-3xl hover:bg-[#d6f0f0] px-6 py-2 border-none text-gray-700"
          >
            Relay
          </Badge>
          <Badge
            variant="outline"
            className="bg-[#FFE8F0] text-[20px] rounded-3xl hover:bg-[#d6f0f0] px-6 py-2 border-none text-gray-700"
          >
            Female
          </Badge>
          <Badge
            variant="outline"
            className="bg-[#EFEDFF] text-[20px] rounded-3xl hover:bg-[#d6f0f0] px-6 py-2 border-none text-gray-700"
          >
            Age: Below 25
          </Badge>
        </div>
        <div className="flex items-center gap-1.5">
          <Image src="/beginner.png" alt="beginner" width={30} height={30} />
          <span className="text-gray-700 text-[20px]">Beginner</span>
        </div>
      </div>

      {/* About this event */}
      <section className="mb-8 border-b border-gray-300 pb-10">
        <h2 className="text-3xl font-semibold mb-4">About this event</h2>
        <p className="text-gray-700 mb-2">
          {showFull
            ? fullDescription
            : fullDescription.substring(0, 120) + "..."}
        </p>
        <Button
          variant="link"
          className="p-0 h-auto text-blue-500"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Show less" : "Read more"}
        </Button>
      </section>

      {/* Location */}
      <section className="mb-8 border-b border-gray-300 pb-10">
        <h2 className="text-3xl font-semibold mb-4">Location</h2>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">NDE Field</h3>
            <p className="text-gray-600 text-sm">
              Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois
            </p>
          </div>
          <Button variant="outline" size="sm" className="rounded-full">
            Open maps
          </Button>
        </div>
      </section>

      {/* Good to know */}
      <section className="mb-8 border-b border-gray-300 pb-10">
        <h2 className="text-3xl font-semibold mb-4">Good to know</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="bg-[#e05d44] text-white p-5 w-full md:w-[30%]">
            <h3 className="font-medium mb-3">Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CalendarDays className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mon, 2 Dec</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>7:30 AM - 8:30 AM</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Arrive 15 min before start</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Venue booked</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-[#2e7d6e] text-white p-5 w-full md:w-[50%]">
            <h3 className="font-medium mb-3">Refund & cancellation policy</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="min-w-4 mt-1">•</div>
                <span>Full refund if host cancels the game</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 mt-1">•</div>
                <span>Full refund if you cancel 24+ hours in advance</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="min-w-4 mt-1">•</div>
                <span>
                  Full refund if game is cancelled due to low attendance
                </span>
              </li>
            </ul>
            <div className="mt-3">
              <Button
                variant="link"
                className="p-0 h-auto text-white underline"
              >
                Learn more
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Hosted by */}
      <section className="lg:w-[70%] py-6">
        <h2 className="text-3xl font-semibold mb-4">Hosted by</h2>
        <Card className="bg-[#3a4256] text-white p-5">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/host.png"
                alt="Host profile picture"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">Alex Mercer</h3>
              <p className="text-gray-300 text-sm">23 activities hosted</p>
              <p className="text-gray-300 text-sm">4.5 host rating</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                variant="outline"
                className="bg-[#FDE8CD] px-6 rounded-3xl text-gray-800 hover:bg-[#f0c28e] border-none"
              >
                Message
              </Button>
              <Button
                variant="outline"
                className="bg-[#4E566B] px-6 rounded-3xl text-[#f0c28e] hover:bg-[#f0c28e] border-[#f0c28e]"
              >
                View profile
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
