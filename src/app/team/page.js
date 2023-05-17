"use client";

import { translateSrc } from "@/commonFrontend";
import EmployeePic from "@/components/specific/homepage/EmployeePic";
import { H4 } from "@/components/text/Headers";

export default function TeamSection() {
  return (
    <div className="relative pt-32 bg-black min-h-screen text-center flex items-center justify-center border-t-4 border-solid border-white justify-evenly">
      <div className="flex flex-col gap-5">
        <H4 className="uppercase font-bold">
          Meet our <br /> team
        </H4>
        <div className="flex flex-wrap items-center justify-center gap-5 space-x-full">
          <EmployeePic
            name="Enrico Pasetto"
            role="CTO/CDO"
            description="Lorem ipsum and some other text"
            imageLink={translateSrc("/employees/enricopasetto.jpg")}
          />
          <EmployeePic
            name="Enrico Pasetto"
            role="CTO/CDO"
            description="Lorem ipsum and some other text"
            imageLink={translateSrc("/employees/enricopasetto.jpg")}
          />
          <EmployeePic
            name="Enrico Pasetto"
            role="CTO/CDO"
            description="Lorem ipsum and some other text"
            imageLink={translateSrc("/employees/enricopasetto.jpg")}
          />
          <EmployeePic
            name="Enrico Pasetto"
            role="CTO/CDO"
            description="Lorem ipsum and some other text"
            imageLink={translateSrc("/employees/enricopasetto.jpg")}
          />
          <EmployeePic
            name="Enrico Pasetto"
            role="CTO/CDO"
            description="Lorem ipsum and some other text"
            imageLink={translateSrc("/employees/enricopasetto.jpg")}
          />
        </div>
      </div>
    </div>
  );
}
