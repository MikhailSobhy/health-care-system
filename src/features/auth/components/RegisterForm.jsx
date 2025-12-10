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
import CustomInput from "@/shared/components/CustomInput";

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <CustomInput
          form
          name={"email"}
          label={"Email address"}
          type="email"
          placeholder="Enter your email address"
          src={MailIcon}
        />
        <CustomInput
          form
          name={"password"}
          label={"Password"}
          type="password"
          placeholder="Enter your password"
          src={PasswordIcon}
        />
        <CustomInput
          form
          name={"confirmPassword"}
          label={"Confirm password"}
          type="password"
          placeholder="Confirm your password"
          src={PasswordIcon}
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
