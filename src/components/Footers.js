"use client";

import Socials from "./Socials";
import TextLink from "./links/TextLink";
import { P2 } from "./text/Paragraphs";

export function HomepageFooter() {
  return (
    <div className="relative grid grid-cols-2 gap-5 border-t-2 border-solid border-white p-4">
      <Socials className="flex justify-center flex-wrap gap-x-2" monocrome />
      <div className="flex items-center justify-center">
        <div className="flex items-center flex-col gap-2">
          <TextLink href="/about" color="white" height="0.125rem">
            <P2>About</P2>
          </TextLink>
          <TextLink href="/careers" color="white" height="0.125rem">
            <P2>Careers</P2>
          </TextLink>
          <TextLink href="/pp" color="white" height="0.125rem">
            <P2>Privacy Policy</P2>
          </TextLink>
          <TextLink href="/tos" color="white" height="0.125rem">
            <P2>TOS</P2>
          </TextLink>
        </div>
      </div>
      <div className="col-start-1 col-end-3 text-center">
        <P2>Contact main</P2>
        <P2>Fiscal info, if necessary</P2>
      </div>
    </div>
  );
}
