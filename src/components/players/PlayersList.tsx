import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export default function PlayersList() {
  const players = [
    { id: 1, name: "Alex Mercer", initials: "AM", isHost: true },
    { id: 2, name: "Jamir Uddin", initials: "JU", isHost: false },
    { id: 3, name: "Biplu Ahmed", initials: "BA", isHost: false },
    { id: 4, name: "Topu Barman", initials: "TB", isHost: false },
    { id: 5, name: "Rakib Hossain", initials: "RH", isHost: false },
  ];

  return (
    <div className="w-full mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Players</h1>
        <div className="flex items-center gap-1">
          <Users className="h-5 w-5" />
          <span className="font-medium">5/11</span>
        </div>
      </div>

      <div className="space-y-3">
        {players.map((player) => (
          <div
            key={player.id}
            className="bg-emerald-700 rounded-lg p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 bg-[#FDE8CD] text-emerald-700">
                <AvatarFallback>{player.initials}</AvatarFallback>
              </Avatar>
              <div className="text-[#FDE8CD] font-medium">
                {player.name}{" "}
                {player.isHost && (
                  <span className="text-[#FDE8CD] text-sm">(Host)</span>
                )}
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="bg-white hover:bg-gray-100 text-black"
            >
              Message
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
