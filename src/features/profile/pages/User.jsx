import React from "react";
import registerImg from "../../../assets/images/register-img.png";
import Navbar from "@/shared/components/Navbar";
import { Form } from "@/components/ui/form";
import CustomInput from "@/shared/components/CustomInput";
import { useForm } from "react-hook-form";
export default function User() {
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
        <div className="w-[80%]">
          <div className="w-[80%] m-auto flex flex-col">
            <Navbar />
            <div className="flex flex-1 flex-col">
              <div className="my-5">
                <p className="text-4xl text-white font-bold mb-3">Welcome </p>
                <p className="text-gray-400">Let us know more about yourself</p>
              </div>
              <div className="">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
                    <p className="text-3xl mb-5 mt-3 text-white">Personal Information</p>
                    <CustomInput
                      form
                      name="fullName"
                      label="Full Name"
                      type="text"
                      placeholder={"ex: Adam"}
                    />
                     <CustomInput
                      form
                      name="dob"
                      label="Date of birth"
                      type="date"
                      placeholder={"Select your birth date"}
                    />
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%]">
          <img src={registerImg} alt="image" />
        </div>
      </div>
    </>
  );
}
