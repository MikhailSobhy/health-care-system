import React from "react";
import registerImg from "../../../assets/images/register-img.png";
import Navbar from "@/shared/components/Navbar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CustomInput from "@/shared/components/CustomInput";
import { useForm } from "react-hook-form";
import emailIcon from "../../../assets/icons/email.svg";
import calendarIcon from "../../../assets/icons/calendar.svg";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
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
import { idType } from "@/shared/utils/constants";
import FileUpload from "../components/FileUpload";

export default function User() {
  const [open, setOpen] = React.useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <div className="flex">
        <div className="w-[95%] md:w-[80%] m-auto">
          <div className="md:w-[80%] m-auto flex flex-col">
            <Navbar />
            <div className="flex flex-1 flex-col">
              <div className="my-5">
                <p className="text-4xl text-white font-bold mb-3">Welcome 👋</p>
                <p className="text-gray-400">Let us know more about yourself</p>
              </div>

              <div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-10"
                  >
                    {/* PERSONAL INFO */}
                    <div className="space-y-5">
                      <p className="text-3xl mb-5 mt-3 text-white">
                        Personal Information
                      </p>

                      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
                        <div className="col-span-2">
                          <CustomInput
                            form
                            name="fullName"
                            label="Full Name"
                            type="text"
                            placeholder="ex: Adam"
                          />
                        </div>

                        <CustomInput
                          form
                          name="email"
                          label="Email address"
                          type="email"
                          placeholder="Enter your email address"
                          src={emailIcon}
                        />

                        <CustomInput
                          form
                          name="phone"
                          label="Phone number"
                          type="text"
                          placeholder="ex: +201013xxxxxx"
                        />

                        <CustomInput
                          form
                          name="dob"
                          label="Date of birth"
                          type="date"
                          placeholder="Select your birth date"
                          src={calendarIcon}
                        />

                        <CustomInput
                          form
                          name="address"
                          label="Address"
                          type="text"
                          placeholder="ex:14 street,New York,NY -5101"
                        />

                        <CustomInput
                          form
                          name="occupation"
                          label="Occupation"
                          type="text"
                          placeholder="ex:Software Engineer"
                        />

                        <CustomInput
                          form
                          name="emergency_name"
                          label="Emergency contact name"
                          type="text"
                          placeholder="Guardian's name"
                        />

                        <CustomInput
                          form
                          name="emergency_number"
                          label="Emergency contact number"
                          type="text"
                          placeholder="ex: +201013xxxxxx"
                        />
                      </div>
                    </div>

                    {/* MEDICAL INFO */}
                    <div className="space-y-5">
                      <p className="text-3xl mb-5 mt-3 text-white">
                        Medical Information
                      </p>

                      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
                        <div className="col-span-2">
                          <CustomInput
                            form
                            name="fullName2"
                            label="Full Name"
                            type="text"
                            placeholder="ex: Adam"
                          />
                        </div>

                        <CustomInput
                          form
                          name="insurance_provider"
                          label="Insurance provider"
                          type="text"
                          placeholder="ex: BlurCross"
                          src={emailIcon}
                        />

                        <CustomInput
                          form
                          name="insurance_number"
                          label="Insurance policy number"
                          type="text"
                          placeholder="ex: ABC1234567"
                        />

                        <CustomInput
                          form
                          name="allergies"
                          label="Allergies (if any)"
                          type="text"
                          placeholder="ex: Peanuts, Penicillin"
                        />

                        <CustomInput
                          form
                          name="current_medications"
                          label="Current medications"
                          type="text"
                          placeholder="ex: Ibuprofen 200mg"
                        />

                        <CustomInput
                          form
                          name="family_history"
                          label="Family medical history (if relevant)"
                          type="text"
                          placeholder="ex: Mother had breast cancer"
                        />

                        <CustomInput
                          form
                          name="past_history"
                          label="Past medical history"
                          type="text"
                          placeholder="ex: Asthma diagnosis in childhood"
                        />
                      </div>
                    </div>

                    {/* IDENTIFICATION */}
                    <div className="space-y-5">
                      <p className="text-3xl mb-5 mt-3 text-white">
                        Identification and Verification
                      </p>

                      <FormField
                        control={form.control}
                        name="id_type"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel className="text-white md:text-gray-400">
                              Identification type
                            </FormLabel>

                            <Popover open={open} onOpenChange={setOpen}>
                              <PopoverTrigger asChild>
                                <div className="relative">
                                  <Button
                                    type="button"
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="
                                      w-full justify-between text-left font-normal
                                      bg-[#1A1D21] border border-gray-600 text-white
                                      focus-visible:border-[#24AE7C]
                                    "
                                  >
                                    {field.value
                                      ? idType.find(
                                          (t) => t.value === field.value
                                        )?.label
                                      : "Select type..."}

                                    <ChevronsUpDown className="opacity-50" />
                                  </Button>
                                </div>
                              </PopoverTrigger>

                              <PopoverContent className="w-[200px] p-0 bg-white border-gray-300">
                                <Command>
                                  <CommandInput
                                    placeholder="Search type..."
                                    className="h-9 bg-white text-black placeholder:text-gray-500 focus:ring-0"
                                  />

                                  <CommandList>
                                    <CommandEmpty className="text-gray-600 px-2 py-2">
                                      No type found.
                                    </CommandEmpty>

                                    <CommandGroup>
                                      {idType.map((type) => (
                                        <CommandItem
                                          key={type.value}
                                          value={type.value}
                                          onSelect={(currentValue) => {
                                            field.onChange(currentValue);
                                            setOpen(false);
                                          }}
                                          className="text-black hover:bg-gray-100 hover:text-black"
                                        >
                                          {type.label}

                                          <Check
                                            className={cn(
                                              "ml-auto text-black",
                                              field.value === type.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </CommandList>
                                </Command>
                              </PopoverContent>
                            </Popover>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <CustomInput
                        form
                        name="id_number"
                        label="Identification number"
                        type="text"
                        placeholder="ex: 301081517xxxxx"
                      />

                      <FormField
                        control={form.control}
                        name="id_document"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white md:text-gray-400">
                              Scanned Copy of Identification Document
                            </FormLabel>

                            <FormControl>
                              <FileUpload
                                onFileSelect={(file) => field.onChange(file)}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <Button
                      type="submit"
                      className="bg-[#24AE7C] text-white px-6 py-3 my-10 rounded-lg hover:bg-[#1f9469] transition w-full text-lg font-medium cursor-pointer"
                    >
                      Submit and Continue
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-[20%]">
          <img src={registerImg} alt="image" className="w-full h-full object-cover"/>
        </div>
      </div>
    </>
  );
}
