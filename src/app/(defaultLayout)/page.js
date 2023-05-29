"use client";

import { translateSrc } from "@/commonFrontend";
import Section from "@/components/common/Section";
import { OnScroll } from "@/components/parallax/OnScroll";
import { Arrow, Circle, Mask } from "@/components/svg/UI";
import { H2, H3, H4, H5 } from "@/components/text/Headers";
import { P1, P2 } from "@/components/text/Paragraphs";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Section className="relative pt-[10vh] flex gap-8 items-center justify-center w-full h-full min-h-screen bg-heroBackground">
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
                <Arrow fill="#E4E4E4" />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section
        active={true}
        className="relative flex flex-col gap-5 bg-greyBackground w-full min-h-screen rounded-t-xl text-heroBackground overflow-hidden"
      >
        <div className="relative min-h-screen flex flex-col justify-center">
          <div className="absolute w-72 aspect-square bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
            <Circle />
          </div>
          <div className="absolute w-[25rem] aspect-square bottom-0 right-0 -translate-y-1/2 translate-x-1/2">
            <Mask />
          </div>
          <div className="h-full flex flex-col justify-around gap-10">
            <div className="grid gap-10 ml-[5%] max-w-[70%]">
              <H5 className="font-bold">What&apos;s SOULution?</H5>
              <P1>
                SOULution is our digital tool designed to simplify{" "}
                <span className="font-bold">community management</span> and{" "}
                <span className="font-bold">expansion</span>. The platform
                provides everything you need to onboard members and grow through{" "}
                <span className="font-bold">storytelling</span> and{" "}
                <span className="font-bold">gamification</span>.
              </P1>
              <div className="w-max py-2 px-6 bg-heroBackground rounded-full text-white">
                <P1>Read Docs</P1>
              </div>
            </div>
            <P1 className="uppercase text-center mx-[5%]">
              Because a great founder is nothing without the support of a great
              community.
            </P1>
          </div>
        </div>
        <div className="relative min-h-screen flex flex-col justify-center">
          <div className="absolute w-72 aspect-square bottom-0 right-0 translate-y-1/2 translate-x-1/2">
            <Circle />
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-center">
            <div className="relative max-w-[30rem] flex flex-col items-center justify-center">
              <div>Img</div>
              <P1>Revenue Share</P1>
              <P2>
                Earn together, grow together. Reward your community&apos;s
                efforts and share the success.
              </P2>
            </div>
            <div className="relative max-w-[30rem] flex flex-col items-center justify-center">
              <div>Img</div>
              <P1>Leaderboard</P1>
              <P2>
                Fuel healthy competition and recognize top contributors with our
                dynamic leaderboard.
              </P2>
            </div>
            <div className="relative max-w-[30rem] flex flex-col items-center justify-center">
              <div>Img</div>
              <P1>IP & Licensing</P1>
              <P2>
                Foster collective IP development. Manage licenses and cultivate
                a thriving creative ecosystem.
              </P2>
            </div>
            <div className="relative max-w-[30rem] flex flex-col items-center justify-center">
              <div>Img</div>
              <P1>DAO</P1>
              <P2>
                Empower your community with decentralized decision-making and
                governance.
              </P2>
            </div>
            <div className="relative max-w-[30rem] flex flex-col items-center justify-center">
              <div>Img</div>
              <P1>Quests & Game-fi</P1>
              <P2>
                Bring your community into action with exciting quests,
                challenges, and missions.
              </P2>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
