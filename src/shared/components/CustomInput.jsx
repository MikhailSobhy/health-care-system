import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";

export default function CustomInput({
  name,
  label,
  type = "text",
  placeholder = "",
  form,
  src,
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-white md:text-gray-400">{label}</FormLabel>

          <FormControl>
            <div className="relative">
              {src && (
                <img
                  src={src}
                  alt="icon"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70"
                />
              )}

              <Input
                type={type}
                placeholder={placeholder}
                className={`${src ? "pl-10" : ""} 
                  text-white bg-[#1A1D21] border border-gray-600 
                  focus-visible:border-[#24AE7C] 
                  selection:bg-[#24AE7C] selection:text-white`}
                {...field}
              />
            </div>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
