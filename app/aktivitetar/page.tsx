import AktCard from "@/components/cards/aktCard";
import { title } from "@/components/primitives";
import React from "react";


export default function Aktivitetar() {
  return (
    <div>
    <div className="flex justify-center">
      <h1 className={title()}>Opplevelsar i Hemsedal</h1>
    </div>

    <AktCard />
    </div>
  );
}
