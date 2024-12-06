"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { Sunny } from "@/images";

export function TeamCard({name, imgUrl,designation}:any) {
  return (
    <CardContainer className="w-full">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black  w-full h-auto rounded-xl">
     
      
        <CardItem translateZ="100" className="w-full mb-5">
          <Image
            src={imgUrl}
            height="1000"
            width="1000"
            className="h-[400px] border  w-[500px] bg-black object-contain object-bottom rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-black dark:text-white"
        >
         {name} <br />
         <span className="text-black/50 text-sm">
           {designation}
         </span>
        </CardItem>
 
      </CardBody>
    </CardContainer>
  );
}
