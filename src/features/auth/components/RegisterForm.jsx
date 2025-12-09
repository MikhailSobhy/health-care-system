import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import MailIcon from "../../../assets/icons/email.svg";
import PasswordIcon from "../../../assets/icons/user.svg";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/shared/utils/validationSchemas";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword:""
    },
  });
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-white md:text-gray-400"}>Email address</FormLabel>
              <FormControl>
                <div className="relative">
                  <img
                    src={MailIcon}
                    alt="mail icon"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70"
                  />

                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="pl-10 text-white bg-[#1A1D21] border border-gray-600 focus-visible:border-[#24AE7C] selection:bg-[#24AE7C] selection:text-white"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-white md:text-gray-400"}>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <img
                    src={PasswordIcon}
                    alt="Password Icon"
                    className="absolute left-3 w-5 h-5 opacity-70 -translate-y-1/2 top-1/2"
                  />
                  <Input
                    type={"password"}
                    placeholder="Enter your password"
                    className={
                      "text-white bg-[#1A1D21] border border-gray-600 focus-visible:border-[#24AE7C] selection:bg-[#24AE7C] pl-10"
                    }
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-white md:text-gray-400"}>Confirm password</FormLabel>
              <FormControl>
                <div className="relative">
                  <img
                    src={PasswordIcon}
                    alt="Password Icon"
                    className="absolute left-3 w-5 h-5 opacity-70 -translate-y-1/2 top-1/2"
                  />
                  <Input
                    type={"password"}
                    placeholder="Confirm your password"
                    className={
                      "text-white bg-[#1A1D21] border border-gray-600 focus-visible:border-[#24AE7C] selection:bg-[#24AE7C] pl-10"
                    }
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className={"w-full bg-[#24AE7C] cursor-pointer hover:bg-[#1c8b63]"}
        >
          Get Started
        </Button>
        <div>
          <p className="text-white">
            Already have account ?{" "}
            <Link className="text-[#24AE7C] hover:underline" to={"/"}>
              Login
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
