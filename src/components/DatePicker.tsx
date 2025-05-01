"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";

export default function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex items-center w-64 bg-white border rounded-full shadow-sm p-1">
      <DatePicker
        selected={selectedDate}
        // @ts-ignore
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select date"
        className="flex-1 bg-transparent text-gray-500 text-sm outline-none px-3 rounded-full"
        wrapperClassName="w-full"
        customInput={<Input className="border-none shadow-none" />}
      />
      <Button
        variant="default"
        size="icon"
        className="w-8 h-8 bg-[#63CFA0] rounded-full flex items-center justify-center"
      >
        <Calendar className="w-5 h-5 text-black" />
      </Button>
    </div>
  );
}
