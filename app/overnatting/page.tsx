import { title } from "@/components/primitives";
import React from "react";
import OvCard from '../../components/cards/OvCard'

export default function AboutPage() {
  return (
    <div>
    <div>
      <div className="flex justify-center">
      <h1 className={title()}>About</h1>
      </div>
      <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas ipsa est dicta ea accusamus cum corrupti in ullam rerum, eligendi iste corporis esse sequi sed. Perspiciatis ex error soluta?</p>
    </div>
    <div>
      <OvCard />
    </div>
    </div>
  );
}
