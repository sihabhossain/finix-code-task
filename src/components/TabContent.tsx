// EventTabContent.tsx
import { Calendar, Check, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventTabContentProps {
  activeTab: "info" | "player" | "comments";
}

export default function EventTabContent({ activeTab }: EventTabContentProps) {
  return (
    <div className="mb-8">
      {activeTab === "info" && (
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 items-center">
            <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-50 rounded-full">
              Football
            </Badge>
            <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50 rounded-full">
              Relay
            </Badge>
            <Badge className="bg-pink-50 text-pink-700 hover:bg-pink-50 rounded-full">
              Female
            </Badge>
            <Badge className="bg-purple-50 text-purple-700 hover:bg-purple-50 rounded-full">
              Age: Below 25
            </Badge>
            <div className="flex items-center gap-2 ml-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Beginner</span>
            </div>
          </div>

          {/* About */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">About this event</h2>
            <p className="text-sm text-gray-700 mb-2">
              Learn about the beautiful final journey to NCR which uses the
              Eating-Burger project...
            </p>
            <button className="text-sm text-blue-600">Read more</button>
          </div>

          {/* Location */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">Location</h2>
            <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <p className="font-medium">NDE Field</p>
                <p className="text-sm text-gray-600">
                  Jean Baptiste Point du Sable Lake Shore Drive, Chicago,
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-100 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Highlights</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 mt-0.5 text-red-600" />
                    <span>Mon, 2 Dec</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 mt-0.5 text-red-600" />
                    <span>7:30 AM - 8:30 AM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 mt-0.5 text-red-600" />
                    <span>Arrive 15 min before start</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-red-600" />
                    <span>Venue booked</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <h3 className="font-medium mb-2">
                  Refund & cancellation policy
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Full refund if host cancels the game</li>
                  <li>• Full refund if you cancel 24+ hours in advance</li>
                  <li>
                    • Full refund if game is cancelled due to low attendance
                  </li>
                </ul>
                <p className="text-xs text-right mt-2 text-green-700">
                  Learn more
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "player" && (
        <div className="prose max-w-none">
          <h3>Player Information</h3>
          <p>This event is open to female players below the age of 25...</p>
          <h4>What to bring:</h4>
          <ul>
            <li>Comfortable sportswear</li>
            <li>Football boots (optional)</li>
            <li>Water bottle</li>
            <li>Positive attitude</li>
          </ul>
          <h4>Team Formation:</h4>
          <p>Teams will be formed on the day of the event...</p>
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
  );
}
