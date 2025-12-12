import React from "react";

function CardItem({ icon, bgImage, num, detalis }) {
  return (
    <div
      className=" p-6 rounded-lg  "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center  gap-2 mb-5">
        <img src={icon} alt="icon" className="w-7 h-7" />
        <p className="text-3xl font-bold">{num}</p>
      </div>

      <p className=" text-sm  lg:text-base  text-white font-semibold ">
        {detalis}
      </p>
    </div>
  );
}

export default CardItem;
