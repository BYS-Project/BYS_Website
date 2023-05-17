"use client";

import Image from "next/image";
import TextLink from "./links/TextLink";
import { P1, P2 } from "./text/Paragraphs";
import { translateSrc } from "@/commonFrontend";

export function HomepageMenu() {
  return (
    <div className="fixed z-10 top-0 left-0 w-full text-3xl font-bold bg-white text-black p-4 border-b-4 border-solid border-black">
      <div className="flex justify-center items-center">
        <div className="relative w-20 sm:w-12 aspect-square transition-all duration-150 ease-in">
          <Image
            src={translateSrc("/logos/bysColoredLogo.svg")}
            fill
            alt="logo"
          />
        </div>
        <div className="w-full h-full flex justify-center sm:justify-end">
          <div className="grid sm:flex gap-y-0 gap-x-4">
            <TextLink href="/" height="0.125rem">
              <P2>Home</P2>
            </TextLink>
            <TextLink href="/dashboard" height="0.125rem">
              <P2>Dashboard</P2>
            </TextLink>
            <TextLink href="/aboutus" height="0.125rem">
              <P2>About Us</P2>
            </TextLink>
            <TextLink href="/roadmap" height="0.125rem">
              <P2>Roadmap</P2>
            </TextLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LaunchpadMenu() {
  /* Not decent for mobile devices */
  return (
    <div className="h-screen py-24 bg-white text-black w-max">
      <div className="h-full flex flex-col justify-evenly px-5 text-xl">
        <div className="flex flex-col gap-2">
          <P1 className="font-bold">USER</P1>
          <div className="pl-4 text-2xl">
            <P1>Idk1</P1>
            <P1>Idk2</P1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <P1 className="font-bold">GENERAL</P1>
          <div className="pl-4 text-2xl">
            <P1>Dashboard</P1>
            <P1>Staking</P1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <P1 className="font-bold">PROJECTS</P1>
          <div className="pl-4 text-2xl">
            <P1>Project Sasso</P1>
            <P1>Coming soon...</P1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <P1 className="font-bold">MODULES</P1>
          <div className="pl-4 text-2xl">
            <P1>Community Scam</P1>
            <P1>Coming soon...</P1>
          </div>
        </div>
      </div>
    </div>
  );
}
