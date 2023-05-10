"use client";

import ImageLink from "@/components/links/ImageLink";
import DiscordLogo from "@/components/logos/DiscordLogo";
import LinkedInLogo from "@/components/logos/LinkedInLogo";
import MediumLogo from "@/components/logos/MediumLogo";
import TwitterLogo from "@/components/logos/TwitterLogo";
import { TranslateOnScroll } from "@/components/parallax/OnScroll";
import H2 from "@/components/text/H2";
import H4 from "@/components/text/H4";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Main Section */}
      <div className="flex items-center h-screen">
        <div className="flex flex-col gap-8 w-full px-[10%]">
          <div className="flex flex-wrap w-full gap-8">
            <div className="flex flex-col gap-8 w-2/3">
              <H2 className="font-bold uppercase">SOME RANDOM AND COOL TEXT</H2>
              <H4>Small description of the project</H4>
            </div>
          </div>
          <div className="flex gap-8 w-full max-w-[30rem]">
            <ImageLink
              scaleOnHover="125%"
              fillOnHover="red"
              href="https://discord.com"
              blank
            >
              <DiscordLogo fill="white" width={"100%"} height={"100%"} />
            </ImageLink>
            <ImageLink
              scaleOnHover="125%"
              fillOnHover="red"
              href="https://twitter.com"
              blank
            >
              <TwitterLogo fill="white" width={"100%"} height={"100%"} />
            </ImageLink>
            <ImageLink
              scaleOnHover="125%"
              fillOnHover="red"
              href="https://medium.com"
              blank
            >
              <MediumLogo fill="white" width={"100%"} height={"100%"} />
            </ImageLink>
            <ImageLink
              scaleOnHover="125%"
              fillOnHover="red"
              href="https://linkedin.com"
              blank
            >
              <LinkedInLogo fill="white" width={"100%"} height={"100%"} />
            </ImageLink>
          </div>
        </div>
      </div>
      {/* Team Section */}
      <TranslateOnScroll>
        <div className="bg-black min-h-screen text-center flex items-center justify-center border-t-4 border-solid border-white justify-evenly">
          <h1>IO</h1>
          <h1>DISMA</h1>
          <h1>SAM</h1>
          <h1>JACOPO</h1>
          <h1>ERMES</h1>
          {/* Links to LinkedIn, Twitter or Instagram for artists */}
        </div>
      </TranslateOnScroll>
    </div>
  );
}
