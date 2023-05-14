"use client";

import ImageLink from "@/components/links/ImageLink";
import DiscordLogo from "@/components/logos/DiscordLogo";
import LinkedInLogo from "@/components/logos/LinkedInLogo";
import MediumLogo from "@/components/logos/MediumLogo";
import TwitterLogo from "@/components/logos/TwitterLogo";
import { TranslateOnScroll } from "@/components/parallax/OnScroll";
import EmployeePic from "@/components/specific/homepage/EmployeePic";
import { H3, H8, H9 } from "@/components/text/Headers";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Main Section */}
      <div className="relative flex items-center min-h-screen">
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col gap-8 w-full px-[10%]">
            <div className="flex flex-wrap w-full gap-8">
              <div className="flex flex-col gap-8 w-2/3">
                <H3 className="font-bold uppercase">
                  SOME RANDOM <br /> AND COOL <br /> TEXT
                </H3>
                <H8>Small description of the project</H8>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 flex gap-8 w-min ">
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
      {/* Instructions */}
      <TranslateOnScroll>
        <div className="relative pt-32 bg-black min-h-screen text-center flex items-center justify-center border-t-4 border-solid border-white justify-evenly">
          <div className="flex flex-col gap-5">
            <H3 className="font-bold uppercase">
              CHECK OUR <br /> DASHBOARD!
            </H3>
            <H8>You will find informations like</H8>
            <div className="flex gap-5 flex-wrap items-center justify-center">
              <H9>Supporting the project - with the right achronym</H9>
              <H9>Interacting with our MVPs</H9>
              <H9>
                Check what BYS is currently cooking - sisma is a good chef
              </H9>
              <H9>Experience our aplha features</H9>
            </div>
          </div>
        </div>
      </TranslateOnScroll>
      {/* Team Section */}
      <TranslateOnScroll>
        <div className="relative pt-32 bg-black min-h-screen text-center flex items-center justify-center border-t-4 border-solid border-white justify-evenly">
          <div className="flex flex-col gap-5">
            <H3 className="uppercase font-bold">
              Meet our <br /> team
            </H3>
            <div className="flex flex-wrap items-center justify-center gap-5 space-x-full">
              <EmployeePic
                name="Enrico Pasetto"
                role="CTO/CDO"
                description="Lorem ipsum and some other text"
                imageLink="/employees/enricopasetto.jpg"
              />
              <EmployeePic
                name="Enrico Pasetto"
                role="CTO/CDO"
                description="Lorem ipsum and some other text"
                imageLink="/employees/enricopasetto.jpg"
              />
              <EmployeePic
                name="Enrico Pasetto"
                role="CTO/CDO"
                description="Lorem ipsum and some other text"
                imageLink="/employees/enricopasetto.jpg"
              />
              <EmployeePic
                name="Enrico Pasetto"
                role="CTO/CDO"
                description="Lorem ipsum and some other text"
                imageLink="/employees/enricopasetto.jpg"
              />
              <EmployeePic
                name="Enrico Pasetto"
                role="CTO/CDO"
                description="Lorem ipsum and some other text"
                imageLink="/employees/enricopasetto.jpg"
              />
            </div>
          </div>
        </div>
      </TranslateOnScroll>
    </div>
  );
}
