import {Image} from "@nextui-org/react";
import React from "react";

export default function HeroImg() {
  return (
    <Image
      isBlurred
      width={1000}
      src="/images/2022-06-16.jpg"
      alt="hemsedal fjjelcamp"
      className="m-5"
    />
  );
}