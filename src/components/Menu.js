import TextLink from "./links/TextLink";
import BysLogo from "./logos/BysLogo";
import H6 from "./text/H6";

export default function Menu() {
  return (
    <div className="fixed z-10 top-0 left-0 w-full text-3xl font-bold bg-white text-black p-4 border-b-4 border-solid border-black">
      <div className="flex flex-cols">
        <div className="h-16 w-max">
          <BysLogo fill="black" width={"100%"} height={"100%"} />
        </div>
        <div className="flex justify-evenly items-center flex-1">
          <TextLink className="flex gap-2" href="/">
            <H6>Home</H6>
          </TextLink>
          <TextLink href="/launchpad">
            <H6>Launchpad</H6>
          </TextLink>
        </div>
      </div>
    </div>
  );
}
