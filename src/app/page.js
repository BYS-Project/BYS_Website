"use client";

import { translateSrc } from "@/commonFrontend";
import Socials from "@/components/Socials";
import {
  CancelOnHover,
  ShowOnRender,
  TranslateY,
} from "@/components/animations/Animations";
import { MouseMoveGradient } from "@/components/mouseMove/MouseMoveAnimations";
import { TranslateOnScroll } from "@/components/parallax/OnScroll";
import EmployeePic from "@/components/specific/homepage/EmployeePic";
import { H1, H3, H3SP, H4, H4SP, H5, H8, H9 } from "@/components/text/Headers";
import { P1, P1SP, P2 } from "@/components/text/Paragraphs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Mission */}
      <div className="relative pt-44 min-h-screen">
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col gap-8 w-full px-[10%]">
            <div className="flex flex-wrap w-full gap-8">
              <MouseMoveGradient
                className="flex flex-col gap-8 w-full"
                from="#ea1d7c"
                to="#4299d5"
              >
                <H4SP className="uppercase text-left font-extrabold">
                  BUILD YOUR
                  <br />
                  SOUL <br />
                  PROJECT
                </H4SP>
                <TranslateY>
                  <ShowOnRender toText="transparent">
                    <P1SP className={`font-bold`}>
                      We believe in the endless potential that Web3 holds for
                      creators&apos; economies and community empowerment. <br />{" "}
                      BYS is a movement, a way of thinking and taking action.{" "}
                      <br />
                      Join us and discover how blockchain and art can be
                      combined to create new opportunities to thrive as a
                      collective.
                    </P1SP>
                  </ShowOnRender>
                </TranslateY>
              </MouseMoveGradient>
              <div className="absolute bottom-[2%] left-[2%]">
                <Socials className="flex gap-x-[10%] gap-y-[5%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Simplified Product */}
      <TranslateOnScroll>
        <div className="relative pt-32 bg-black min-h-screen text-center flex items-center justify-center border-t-4 border-solid border-white justify-evenly">
          <div className="w-full h-full grid gap-y-[15%]">
            <div className="font-extrabold uppercase text-center w-full">
              <div className="flex flex-col items-center justify-center">
                <H4SP className="font-extrabold">Check out our:</H4SP>
                <Link href="/docs/roadmap">
                  <CancelOnHover
                    className="text-third"
                    text="roadmap"
                    dimension={<H4SP />}
                    lineColor="#ea1d7c"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/docs/litepaper">
                  <CancelOnHover
                    className="text-forth"
                    text="litepaper"
                    dimension={<H4SP />}
                    lineColor="#ce3389"
                  />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <P1SP className="w-2/3 font-bold text-first">
                Explore the features of the Community Hub, our digital tool
                specifically designed for Web3 communities: IP ideation,
                community database, DAO, revenue sharing, and more. <br /> Read
                the full documentation to discover the next steps along the way.
              </P1SP>
            </div>
          </div>
        </div>
      </TranslateOnScroll>
      {/* Contact Us */}
      <TranslateOnScroll>
        <div className="relative pt-32 bg-black min-h-screen text-center flex items-center justify-center border-t-4 border-solid border-white justify-evenly">
          <div className="w-full h-full grid gap-y-[15%]">
            <div className="flex items-center justify-center">
              <H4SP
                style={{ "-webkit-text-stroke": "1px white" }}
                className="font-extrabold text-first"
              >
                HEY!
              </H4SP>
            </div>
            <div className="flex items-center justify-center">
              <P1SP className="w-5/6 font-bold text-third">
                Are you a founder, creator, or member of a Web3 community?{" "}
                <br /> Do you see room for collaboration with our project?{" "}
                <br /> Please don&apos;t hesitate to contact us, even just to
                chat. <br /> It is always a pleasure to meet enterprising
                figures who share our passion.
              </P1SP>
            </div>
          </div>
        </div>
      </TranslateOnScroll>
    </div>
  );
}
