"use client";

import TextLink from "./links/TextLink";
import { P1 } from "./text/Paragraphs";

export function HomepageFooter() {
  return (
    <div className="relative grid grid-cols-2 gap-5 border-t-2 border-solid border-white p-4">
      <div className="flex items-center justify-center">
        <P1>Socials here</P1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center flex-col gap-2">
          <TextLink href="/about" color="white" height="0.125rem">
            <P1>About</P1>
          </TextLink>
          <TextLink href="/careers" color="white" height="0.125rem">
            <P1>Careers</P1>
          </TextLink>
          <TextLink href="/pp" color="white" height="0.125rem">
            <P1>Privacy Policy</P1>
          </TextLink>
          <TextLink href="/tos" color="white" height="0.125rem">
            <P1>Terms of Service</P1>
          </TextLink>
        </div>
      </div>
      <div className="col-start-1 col-end-3 text-center">
        <P1>Contact main</P1>
        <P1>Fiscal info, if necessary</P1>
      </div>
    </div>
  );
}
