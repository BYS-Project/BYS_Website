import {
  DiscordLogo,
  LinkedinLogo,
  MediumLogo,
  TwitterLogo,
} from "../svg/Logos";
import { H3, H6 } from "../text/Headers";
import { P1, P3, P4 } from "../text/Paragraphs";

export function HomepageMenu() {
  return (
    <div className="fixed z-10 top-0 left-0 py-2 px-8 grid grid-cols-3 gap-8 w-full">
      <div className="flex items-center justify-start gap-4">
        <P1 className="font-bold uppercase bg-transparent">BYS Project</P1>
      </div>
      <div className="flex gap-12 items-center justify-center  w-full">
        <P4 className="uppercase">Dashboard</P4>
        <P4 className="uppercase">Learn</P4>
        <P4 className="uppercase">About</P4>
      </div>
      <div className="flex items-center justify-end">
        <P4 className="uppercase bg-white text-black rounded-full px-4 py-2 font-bold">
          Book a Demo
        </P4>
      </div>
    </div>
  );
}
export function DashboardMenu() {
  return <div></div>;
}
