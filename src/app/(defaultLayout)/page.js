"use client";

import Socials from "@/components/Socials";
import {
  CancelOnHover,
  ShowOnRender,
  TranslateY,
} from "@/components/animations/Animations";
import { MouseMoveGradient } from "@/components/mouseMove/MouseMoveAnimations";
import { TranslateOnScroll } from "@/components/parallax/OnScroll";
import { H2, H4SP } from "@/components/text/Headers";
import { P1SP } from "@/components/text/Paragraphs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Mission */}
      <div className="relative min-h-screen pt-44">
        <div className="h-full w-full flex items-center justify-center">
          <div className="flex flex-col gap-8 w-full px-[10%]">
            <div className="flex flex-wrap w-full gap-8">
              <MouseMoveGradient
                className="flex flex-col gap-8 w-full"
                from="#ea1d7c"
                to="#4299d5"
              >
                <H4SP className="uppercase text-left font-extrabold">
                  BYS PROJECT
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
            </div>
          </div>
        </div>
        <div className="absolute bottom-[3.5%] left-[3.5%]">
          <Socials className="flex gap-x-[10%] gap-y-[5%]" />
        </div>
      </div>
      {/* Simplified Product */}
      <TranslateOnScroll>
        <div className="relative pt-32 bg-black min-h-screen text-center flex items-center justify-center border-t-4 border-solid border-white justify-evenly">
          <div className="w-full h-full grid gap-y-[15%]">
            <div className="font-extrabold uppercase text-center w-full">
              <div className="flex flex-col items-center justify-center">
                <H4SP className="font-extrabold">Check out our:</H4SP>
                <Link href="/roadmap">
                  <CancelOnHover
                    className="text-third"
                    text="roadmap"
                    dimension={<H4SP />}
                    lineColor="#4299d5"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/docs/litepaper">
                  <CancelOnHover
                    className="text-forth"
                    text="litepaper"
                    dimension={<H4SP />}
                    lineColor="#8866af"
                  />
                </Link>
              </div>
            </div>
            <TranslateY className="flex items-center justify-center" safe>
              <P1SP className="w-2/3 font-bold text-first">
                Explore the features of the Community Hub, our digital tool
                specifically designed for Web3 communities: IP ideation,
                community database, DAO, revenue sharing, and more. <br /> Read
                the full documentation to discover the next steps along the way.
              </P1SP>
            </TranslateY>
          </div>
        </div>
      </TranslateOnScroll>
      {/* Contact Us */}
      <TranslateOnScroll>
        <div className="relative pt-32 bg-black min-h-screen text-center flex items-center justify-center border-t-4 border-solid border-white justify-evenly">
          <div className="w-full h-full grid gap-y-[15%]">
            <div className="flex items-center justify-center">
              <H2
                style={{ WebkitTextStroke: "3px white" }}
                className="font-extrabold text-first"
              >
                HEY!
              </H2>
            </div>
            <TranslateY className="flex items-center justify-center" safe>
              <P1SP className="w-5/6 font-bold text-forth">
                Are you a founder, creator, or member of a Web3 community?{" "}
                <br /> Do you see room for collaboration with our project?{" "}
                <br /> Please don&apos;t hesitate to contact us, even just to
                chat. <br /> It is always a pleasure to meet enterprising
                figures who share our passion.
              </P1SP>
            </TranslateY>
          </div>
        </div>
      </TranslateOnScroll>
    </div>
  );
}
