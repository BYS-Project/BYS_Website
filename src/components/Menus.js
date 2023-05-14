"use client";

import TextLink from "./links/TextLink";
import BysLogo from "./logos/BysLogo";
import { H8 } from "./text/Headers";
import { P1 } from "./text/Paragraphs";

export function HomepageMenu() {
  return (
    <div className="fixed z-10 top-0 left-0 w-full text-3xl font-bold bg-white text-black p-4 border-b-4 border-solid border-black">
      <div className="flex flex-cols">
        <div className="h-16 w-max">
          <BysLogo fill="black" width={"100%"} height={"100%"} />
        </div>
        <div className="flex justify-evenly items-center flex-1">
          <TextLink className="flex gap-2" href="/">
            <H8>Home</H8>
          </TextLink>
          <TextLink href="/launchpad">
            <H8>Launchpad</H8>
          </TextLink>
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
