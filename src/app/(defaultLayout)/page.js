"use client";

import { translateSrc } from "@/commonFrontend";
import ConsoleEffect from "@/components/animations/ConsoleEffect";
import Section from "@/components/common/Section";
import Separator from "@/components/specific/index/Separator";
import { Arrow, Circle, Mask } from "@/components/svg/UI";
import { H2, H3, H4, H5, H8 } from "@/components/text/Headers";
import { P1, P2, P4 } from "@/components/text/Paragraphs";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Section
        top
        active
        themes={["transparent", "blue"]}
        className="relative pt-[10vh] flex gap-8 items-center justify-center w-full h-full min-h-screen bg-blue"
        style={{ textShadow: "1px 1px 1px white" }}
      >
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
          <div className="flex justify-start flex-col">
            <H4 className={"font-extrabold"}>
              <ConsoleEffect
                defaultPhrase="Empowering "
                phrases={[
                  "communities",
                  "creators",
                  "artists",
                  "collectives",
                  "projects",
                  "businesses",
                ]}
                duration={2250}
                timeoutBetween={1500}
                additionalChar={"_"}
              />
            </H4>
            <H4 className="font-extrabold">around the world</H4>
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
      <div
        className="bg-blue overflow-hidden"
        style={{ textShadow: "1px 1px 1px white" }}
      >
        <Section
          themes={["grey", "blue"]}
          active
          className="relative py-4 flex flex-col gap-5 bg-grey w-full min-h-screen rounded-t-xl text-blue "
        >
          <div className="relative min-h-screen flex flex-col justify-center">
            <div className="absolute w-72 aspect-square bottom-0 left-0 translate-y-1/2 -translate-x-1/2">
              <Circle />
              <div className="absolute top-[50%] -rotate-[35deg] w-full h-0.5 bg-grey" />
            </div>
            <div className="absolute w-[25rem] aspect-square bottom-0 right-0 -translate-y-1/2 translate-x-1/2">
              <Mask />
            </div>
            <div className="relative h-full flex flex-col justify-around gap-10">
              <div className="relative flex flex-col items-center sm:items-start text-center sm:text-left gap-10 ml-[5%] max-w-[95%] sm:max-w-[70%]">
                <H8 className="font-extrabold">What&apos;s SOULution?</H8>
                <P1>
                  SOULution is our digital tool designed to simplify{" "}
                  <span className="font-bold">community management</span> and{" "}
                  <span className="font-bold">expansion</span>.
                  <br />
                  The platform provides everything you need to onboard members
                  and grow through{" "}
                  <span className="font-bold">storytelling</span> and{" "}
                  <span className="font-bold">gamification</span>.
                </P1>
                <div className="w-max py-2 px-6 bg-blue rounded-full text-white">
                  <P1>Read Docs</P1>
                </div>
              </div>
              <P1 className="uppercase text-center mx-[5%]">
                Because a great founder is nothing without the support of a
                great community.
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
                <P1 className="font-extrabold">Revenue Share</P1>
                <P2>
                  Earn together, grow together. Reward your community&apos;s
                  efforts and share the success.
                </P2>
              </div>
              <div className="relative max-w-[30rem] flex flex-col items-center justify-center">
                <div>Img</div>
                <P1 className="font-extrabold">Leaderboard</P1>
                <P2>
                  Fuel healthy competition and recognize top contributors with
                  our dynamic leaderboard.
                </P2>
              </div>
              <div className="relative max-w-[30rem] flex flex-col items-center justify-center">
                <div>Img</div>
                <P1 className="font-extrabold">IP & Licensing</P1>
                <P2>
                  Foster collective IP development. Manage licenses and
                  cultivate a thriving creative ecosystem.
                </P2>
              </div>
              <div className="relative max-w-[30rem] flex flex-col items-center justify-center">
                <div>Img</div>
                <P1 className="font-extrabold">DAO</P1>
                <P2>
                  Empower your community with decentralized decision-making and
                  governance.
                </P2>
              </div>
              <div className="relative max-w-[30rem] flex flex-col items-center justify-center">
                <div>Img</div>
                <P1 className="font-extrabold">Quests & Game-fi</P1>
                <P2>
                  Bring your community into action with exciting quests,
                  challenges, and missions.
                </P2>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <div
        className="bg-grey overflow-hidden"
        style={{ textShadow: "1px 1px 1px white" }}
      >
        <Section
          themes={["blue", "grey"]}
          active
          className="relative flex flex-col py-4 gap-5 bg-blue w-full min-h-screen rounded-t-3xl text-grey"
        >
          <div className="flex flex-wrap sm:grid sm:grid-cols-2 h-max w-full min-h-screen">
            <div className="flex flex-col gap-10 sm:pt-20 px-[5%] sm:pr-[10%] text-center sm:text-left sm:col-start-2">
              <H8 className={"font-extrabold"}>Tailored to your Community.</H8>
              <P1>
                Customize every aspect of your community experience with
                SOULution. From design and branding to interactions and content,
                we put you in control. Build your own Hogwarts for your
                wizarding community.
              </P1>
              <div className="flex items-center sm:items-start justify-center sm:justify-start w-full">
                <P4
                  className={`w-max text-blue bg-grey rounded-full px-4 py-2 font-bold transition-all duration-150 ease-out`}
                >
                  Take a look
                </P4>
              </div>
            </div>
            <div className="w-full h-full flex items-center sm:-translate-x-[25%] sm:col-start-1 sm:row-start-1">
              <div className="bg-white w-full aspect-video rounded-3xl"></div>
            </div>
          </div>
          <div className="min-h-screen flex flex-col sm:grid sm:grid-cols-2 gap-20 sm:gap-0 text-center sm:text-left">
            <div className="flex flex-col justify-center px-[10%] gap-10">
              <P1>
                Our team will support you at every stage ensuring a smooth
                process and an optimized result.
              </P1>
              <div className="flex items-center justify-center sm:justify-start">
                <P4
                  className={`w-max text-blue bg-grey rounded-full px-4 py-2 font-bold transition-all duration-150 ease-out`}
                >
                  Book a Demo
                </P4>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5 font-extrabold text-center rounded-t-3xl">
              <H8>Personalize</H8>
              <Separator />
              <H8>Onboard</H8>
              <Separator />
              <H8>Set Sail</H8>
              <Separator />
              <H8>Conquer</H8>
            </div>
          </div>
        </Section>
      </div>
      <div
        className="bg-blue overflow-hidden"
        style={{ textShadow: "1px 1px 1px white" }}
      >
        <Section
          themes={["grey", "blue"]}
          active
          className="relative flex flex-col items-center justify-center gap-5 bg-lightBlue w-full h-full min-h-screen rounded-t-3xl text-grey "
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-center">
            <H8 className={"uppercase font-extrabold mx-[5%]"}>
              Stop looking for the promised land. <br />
              Build it with your own hands.
            </H8>
            <div className="flex flex-col justify-center items-center gap-10 rounded-3xl bg-grey mx-[2.5%] sm:mx-[10%] px-2 py-10 sm:p-10 text-center">
              <H5 className="font-extrabold text-lightBlue">Collab?</H5>
              <P1 className="text-blue">
                Are you a founder, creator, or member of a Web3 community?
                <br />
                Please don&apos;t hesitate to contact us, even just to chat.
              </P1>
              <P4
                className={`w-max text-grey bg-blue rounded-full px-4 py-2 font-bold transition-all duration-150 ease-out`}
              >
                Contact us
              </P4>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
