"use client";

import * as React from "react";
import { Search, ChevronDown, Check, icons } from "lucide-react";
import drGreen from "../../../assets/images/dr-green.png";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const frameworks = [
  {
    value: "Dr. islam saeed",
    label: "Dr. islam saeed",
    icon: drGreen,
  },
];

export function AdminComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <span className=" text-[#ABB8C4] font-semibold ">Doctor</span>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="cursor-pointer text-[#76828D] p-6 
           hover:text-[#76828D] w-full justify-between bg-transparent    border-[#363A3D]
            hover:bg-transparent relative "
        >
          {value ? (
            <div
              className="flex items-center gap-1 ms-5 py-1.5 
            px-2 border border-[#363A3D] rounded-sm  
            bg-linear-to-r from-[#323636] to-[#CCEBEB00]
         "
            >
              <img
                src={
                  frameworks.find((framework) => framework.value === value)
                    ?.icon
                }
                alt=""
                className="w-5 h-5"
              />

              <span className="text-white">
                {
                  frameworks.find((framework) => framework.value === value)
                    ?.label
                }
              </span>
            </div>
          ) : (
            <span className="ps-5 "> "Select or Search A doctor..."</span>
          )}

          <ChevronDown className=" text-[#B6F09C]" />
          <Search
            className=" text-[#B6F09C] 
            left-2 absolute -translate-y-1/2 top-1/2"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 border-none bg-transparent">
        <Command className="  bg-[#1A1D21F5] border-[#363A3D] border text-white">
          <CommandInput className=" h-9 " placeholder="Search doctor..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="bg-[#1A1D21F5] text-white">
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
