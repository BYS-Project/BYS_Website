import { H3, H4, H5 } from "@/components/text/Headers";
import { P1, P2, P3 } from "../text/Paragraphs";
import { LinkButton } from "../ui/Buttons";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative h-full w-full bg-gradient-to-bl from-40% from-black to-white overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute top-[10vh] -translate-x-full rounded-full w-[30%] aspect-square bg-[rgba(255,255,255,0.05)]" />
        <div className="absolute top-[10vh] rounded-full w-[50%] aspect-square bg-[rgba(255,255,255,0.05)]" />
        <div className="absolute top-[20vh] translate-x-full rounded-full w-[35%] aspect-square bg-[rgba(255,255,255,0.05)]" />
      </div>
      <div className="absolute top-0 left-0 opacity-[1]">
        <video className="aspect-video" width="100%" autoPlay muted loop>
          <source src="/video/background2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative">
        <div className="flex items-center justify-center min-h-screen w-full">
          <div className="flex flex-col gap-16">
            <div className="grid gap-2 text-center">
              <H5 className="font-bold">
                Empowering <span className="text-black">COMMUNITIES</span>{" "}
                around the world
              </H5>
              <P1>Prendi in mano la tua vita inutile e fanne qualcosa</P1>
            </div>
            <div className="flex items-center justify-center flex-col sm:flex-row gap-8 font-bold">
              <LinkButton
                href="/docs/whitepaper"
                className="p-4 bg-gradient-to-r from-40% from-black to-white hover:bg-gradient-to-l"
              >
                <P3 className="uppercase">Whitepaper</P3>
              </LinkButton>
              <LinkButton
                href="/sto/register"
                className="p-4 bg-gradient-to-r from-40% from-black to-white hover:bg-gradient-to-l"
              >
                <P3 className="uppercase">Whitepaper</P3>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Mission() {
  return (
    <div className="relative h-max w-full">
      <H4 className="uppercase text-white">Mission</H4>
      <div>
        <div>
          {/* Image here */}
          <H5>Public</H5>
          <P1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> A
            accusamus animi deserunt dignissimos dolorum.
          </P1>
        </div>
      </div>
    </div>
  );
}

export function StoSection() {
  return (
    <div className="relative min-h-screen w-full">
      <H3>STO Pre Sale Going On</H3>
      <P1>
        to find the ones who get it right. We trust our future with experts
        everyday
      </P1>
      <div>
        <P1>Nth phase of STO sale ends in</P1>
        <div>
          <div>
            <H3>221</H3>
            <H3>:</H3>
            <H3>18</H3>
            <H3>:</H3>
            <H3>22</H3>
            <H3>:</H3>
            <H3>23</H3>
          </div>
          <div>
            <H3 className="uppercase">Days</H3>
            <H3 className="uppercase">Hours</H3>
            <H3 className="uppercase">Minutes</H3>
            <H3 className="uppercase">Seconds</H3>
          </div>
        </div>
        <div className="relative w-full h-max border-2 border-solid border-white">
          <div className="absolute w-full h-full top-0 left-0">
            <div className="rounded-l-xl bg-[rgba(192,168,1,1)]" />
            <div className="bg-[rgba(172,168,1,1)]" />
            <div className="bg-[rgba(98,168,1,1)]" />
            <div className="rounded-r-xl bg-[rgba(56,168,1,1)]" />
          </div>
        </div>
        <LinkButton href="/buyToken">
          <P1 className="text-uppercase">Buy token now</P1>
        </LinkButton>
      </div>
    </div>
  );
}
