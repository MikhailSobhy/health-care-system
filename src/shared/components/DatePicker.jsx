import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(undefined); // plain JS

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1 text-[#ABB8C4]">
        Date of birth
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="cursor-pointer hover:none hover:text-[#76828D] hover:bg-transparent bg-transparent border-[#363A3D] w-full justify-between font-normal text-[#76828D]"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="text-white bg-[#1A1D21F5] w-auto overflow-hidden p-0 border-[#363A3D] shadow-2xl"
          align="start"
        >
          <Calendar
            className="bg-amber-200"
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(d) => {
              setDate(d);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
