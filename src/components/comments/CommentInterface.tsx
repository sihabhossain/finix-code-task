"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreVertical, ReplyIcon } from "lucide-react";

interface Message {
  id: string;
  user: {
    id: string;
    name: string;
    initials: string;
  };
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

export default function CommentInterface() {
  const [messages] = useState<Message[]>([
    {
      id: "1",
      user: {
        id: "am",
        name: "Alex Mercer",
        initials: "AM",
      },
      content: "Looking forward to the game! What's the final player count?",
      timestamp: "14 min",
      isCurrentUser: true,
    },
    {
      id: "2",
      user: {
        id: "rk",
        name: "Rifat Khan",
        initials: "RK",
      },
      content: "missing few players",
      timestamp: "14 min",
      isCurrentUser: false,
    },
    {
      id: "3",
      user: {
        id: "rk",
        name: "Rifat Khan",
        initials: "RK",
      },
      content: "got any friends?",
      timestamp: "14 min",
      isCurrentUser: false,
    },
    {
      id: "4",
      user: {
        id: "am",
        name: "Alex Mercer",
        initials: "AM",
      },
      content: "Looking forward to the game! What's the final player count?",
      timestamp: "14 min",
      isCurrentUser: true,
    },
    {
      id: "5",
      user: {
        id: "am",
        name: "Alex Mercer",
        initials: "AM",
      },
      content: "Looking forward to the game! What's the final player count?",
      timestamp: "14 min",
      isCurrentUser: true,
    },
    {
      id: "6",
      user: {
        id: "rk",
        name: "Rifat Khan",
        initials: "RK",
      },
      content: "got any friends?",
      timestamp: "14 min",
      isCurrentUser: false,
    },
  ]);

  return (
    <div className="w-full mx-auto bg-gray-50 rounded-lg p-4 space-y-4">
      {messages.map((message, index) => (
        <div key={message.id} className="space-y-1">
          <div
            className={`flex items-start gap-3 p-3 rounded-lg ${
              message.isCurrentUser
                ? "bg-emerald-700 text-white"
                : "bg-orange-100 text-gray-800"
            }`}
          >
            <Avatar className="h-8 w-8 text-xs">
              <div
                className={`flex items-center justify-center h-full w-full ${
                  message.isCurrentUser
                    ? "bg-[#FDE8CD] text-emerald-700"
                    : "bg-emerald-700 text-[#FDE8CD]"
                }`}
              >
                {message.user.initials}
              </div>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-medium">{message.user.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs opacity-80">
                    {message.timestamp}
                  </span>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
          {message.isCurrentUser && (
            <div className="pl-11">
              <Button
                variant="ghost"
                size="sm"
                className="h-6 text-xs text-gray-500 hover:text-gray-700"
              >
                <ReplyIcon className="h-3 w-3 mr-1" />
                Reply
              </Button>
            </div>
          )}
        </div>
      ))}
      <div className="pt-4">
        <Input
          placeholder="Write a comment"
          className="w-full rounded-full bg-white border-gray-200"
        />
      </div>
    </div>
  );
}
