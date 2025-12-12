import CardItem from "./CardItem";
import AppointmentImg from "../../../assets/images/appointments-bg.png";
import PendingBg from "../../../assets/images/pending-bg.png";
import CancelledBg from "../../../assets/images//cancelled-bg.png";
import AppointmentIcon from "../../../assets/icons/appointments.svg";
import PendingIcon from "../../../assets/icons/pending.svg";
import CancelledIcon from "../../../assets/icons/cancelled.svg";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Cards() {
  return (
    <Card className="bg-transparent border-none text-white px-container">
      <CardHeader>
        <CardTitle>Welcome, Admin</CardTitle>
        <CardDescription className="md:text-gray-400 text-sm">
          Start day with managing new appointments
        </CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardItem
          bgImage={AppointmentImg}
          num={94}
          detalis="Total number of  scheduled appointments"
          icon={AppointmentIcon}
        />
        <CardItem
          bgImage={PendingBg}
          num={32}
          detalis="Total number of pending appointments"
          icon={PendingIcon}
        />
        <CardItem
          bgImage={CancelledBg}
          num={56}
          detalis="Total number of cancelled  appointments"
          icon={CancelledIcon}
        />
      </CardContent>
    </Card>
  );
}

export default Cards;
