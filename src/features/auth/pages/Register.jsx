import Navbar from "@/shared/components/Navbar";
import loginImg from "../../../assets/images/onboarding-img.png";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="flex h-screen">
      <div className="w-full h-screen flex absolute backdrop-blur-lg bg-black/30 md:w-1/2 md:backdrop-blur-none md:bg-transparent md:static">
        <div className="w-[95%] sm:w-[80%] xl:w-[60%] m-auto flex flex-col h-full">
          <div>
            <Navbar />
          </div>
          <div className="flex flex-col justify-center flex-1">
            <div className="mb-10">
              <p className="text-white text-3xl mb-2">Hi there, ...</p>
              <p className="text-white md:text-gray-400 text-sm">
                Get Started with Appointments
              </p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>

      <div className="w-full h-screen rounded-l-2xl overflow-hidden md:w-1/2">
        <img
          src={loginImg}
          alt="Login image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
