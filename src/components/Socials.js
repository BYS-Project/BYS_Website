import ImageLink from "./links/ImageLink";
import DiscordLogo from "./logos/DiscordLogo";
import LinkedInLogo from "./logos/LinkedInLogo";
import MediumLogo from "./logos/MediumLogo";
import TwitterLogo from "./logos/TwitterLogo";

export default function Socials({ className, monocrome }) {
  const ap1 = monocrome
    ? { fill: "white" }
    : { fillLinear: { from: "#ea1d7c", to: "#ce3389" } };
  const ap2 = monocrome
    ? { fill: "white" }
    : { fillLinear: { from: "#ce3389", to: "#8866af" } };
  const ap3 = monocrome
    ? { fill: "white" }
    : { fillLinear: { from: "#8866af", to: "#4299d5" } };
  const ap4 = monocrome
    ? { fill: "white" }
    : { fillLinear: { from: "#4299d5", to: "white" } };
  return (
    <div className={className}>
      <ImageLink
        scaleOnHover="110%"
        fillOnHover="white"
        href="https://discord.com"
        blank
      >
        <DiscordLogo {...ap1} width={"100%"} height={"100%"} />
      </ImageLink>
      <ImageLink
        scaleOnHover="110%"
        fillOnHover="white"
        href="https://twitter.com"
        blank
      >
        <TwitterLogo {...ap2} width={"100%"} height={"100%"} />
      </ImageLink>
      <ImageLink
        scaleOnHover="110%"
        fillOnHover="white"
        href="https://medium.com"
        blank
      >
        <MediumLogo {...ap3} width={"100%"} height={"100%"} />
      </ImageLink>
      <ImageLink
        scaleOnHover="110%"
        fillOnHover="white"
        href="https://linkedin.com"
        blank
      >
        <LinkedInLogo {...ap4} width={"100%"} height={"100%"} />
      </ImageLink>
    </div>
  );
}
