"use client";

import { translateSrc } from "@/commonFrontend";
import { Arrow } from "@/components/svg/UI";
import { H2, H3, H4 } from "@/components/text/Headers";
import { P1 } from "@/components/text/Paragraphs";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="relative pt-[10vh] flex gap-8 items-center justify-center w-full h-full min-h-screen bg-heroBackground">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.3]"
          autoPlay
          loop
          muted
        >
          <source
            src={translateSrc("video/heroBackground.mp4")}
            type="video/mp4"
          />
        </video>
        <div className="relative w-full h-screen text-center pb-[5vh] mx-[5%] flex flex-col flex justify-around">
          <div className="flex justify-start">
            <H4 className="font-extrabold">
              Empowering communities around the world
            </H4>
          </div>
          <div className="flex justify-center">
            <P1>
              Unleash your potential in the world of Web3. Leave the
              spectator&apos;s seat behind and step onto the field.
            </P1>
          </div>
          <div className="flex flex-col justify-end">
            <P1>Explore SOULution</P1>
            <div className="w-full flex justify-center">
              <div className="w-12 aspect-square -rotate-90">
                <Arrow fill="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
