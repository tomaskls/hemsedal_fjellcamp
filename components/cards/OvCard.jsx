"use client"
import { Link, Card, CardFooter, Button, CardHeader, CardBody, Image } from "@nextui-org/react";
import React from "react";

const cardData = [
  {
    src: "/images/223.png",
    title: "Loftet",
    description: "Loftet er et autentisk laftebygg som levde sine første 100 år ved Gol stasjon. Høsten 2023 ble bygget flyttet til Hemsedal Fjellcamp."
  },
  {
    src: "/images/223.png",
    title: "Loftet",
    description: "Loftet er et autentisk laftebygg som levde sine første 100 år ved Gol stasjon. Høsten 2023 ble bygget flyttet til Hemsedal Fjellcamp."
  },
  {
    src: "/images/223.png",
    title: "Loftet",
    description: "Loftet er et autentisk laftebygg som levde sine første 100 år ved Gol stasjon. Høsten 2023 ble bygget flyttet til Hemsedal Fjellcamp."
  },
 
];


    export default function OvCard() {
      return (
        <div className="mt-10 flex flex-wrap justify-around gap-4">
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
                <p>{item.description}</p>
                <CardFooter className="flex-col gap-2 justify-end items-end">
                  <Button color="default">Vise mer</Button>
                  <Button as={Link} color="secondary" 
                  target="blank"
                  href="https://online.bookvisit.com/accommodation/room-details?channelId=68f09ec7-15d6-4821-ab61-19c9a93ccb17&roomId=0b5373be-7013-4bd2-9fc1-7566a3c3d442"
                  >Bestill nå</Button>
                </CardFooter>
              </CardHeader>
            </Card>
          ))}
        </div>
      );
    }