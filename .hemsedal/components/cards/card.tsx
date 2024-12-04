import { Card, CardFooter, Button, CardHeader, CardBody, Image } from "@nextui-org/react";
import React from "react";

const cardData = [
  {
    src: "/images/KAT_6791.jpg",
    title: "Overnatting",
  },
  {
    src: "/images/2024-07-11.jpg",
    title: "Campingplassen",
  },
  {
    src: "/images/2023-06-09.jpg",
    title: "Aktivitetar",
  },
 
];


    export default function InfoCard() {
      return (
        <div className="mt-20 flex flex-wrap justify-around gap-4">
          {cardData.map((item, index) => (
            <Card key={index} className="py-4 w-full sm:w-1/2 md:w-1/3 lg:w-[370px]">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="w-full h-auto rounded-xl object-contain"
                  src={item.src}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{item.title}</h4>
                <CardFooter className="flex justify-end">
                  <Button color="secondary">Vise mer</Button>
                </CardFooter>
              </CardHeader>
            </Card>
          ))}
        </div>
      );
    }