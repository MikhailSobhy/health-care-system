import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import admin from "../../../assets/images/admin.png";

function UserAvatar({ role, name }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Avatar>
        <AvatarImage src={admin} alt={name} />
        <AvatarFallback>{role.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm text-white font-bold">
          {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        </p>
      </div>
    </div>
  );
}

export default UserAvatar;
