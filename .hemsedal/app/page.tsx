"use client"
import InfoCard from "@/components/cards/card";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen w-full mt-0">
        <div
          className="absolute  inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/2022-06-16.jpg')" }}
        >
          <div className="absolute inset-0 "></div>

          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4">
              <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8 drop-shadow-md">Velkommen til</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">Hemsedal Fjellcamp</h1>

            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <InfoCard />

        </div>
      </div>

    </div>
  );
}
