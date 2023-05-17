"use client";

import { translateSrc } from "@/commonFrontend";
import EmployeePic from "@/components/specific/homepage/EmployeePic";
import { H4SP } from "@/components/text/Headers";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="pt-44 flex justify-center items-center">
      <div>
        <H4SP className="uppercase font-extrabold text-center">
          <span className="text-first">Meet</span>{" "}
          <span className="text-third">our </span>
          <span className="text-forth">team!</span>
        </H4SP>
        <div className="flex flex-wrap justify-center items-center my-[5%] gap-2 md:gap-5">
          <Link
            href="https://www.linkedin.com/in/claudio-disma-brunetto-santolin-5609a2167/"
            target="_blank"
          >
            <EmployeePic
              name="Claudio Disma"
              surname="Brunetto Santolin"
              role="CEO"
              description="Descr1"
              imageLink={translateSrc(
                "/employees/claudiodismabrunettosantolin.png"
              )}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/samuele-gobbo-14ba7b229/"
            target="_blank"
          >
            <EmployeePic
              name="Samuele"
              surname="Gobbo"
              role="COO"
              description="Descr2"
              imageLink={translateSrc("/employees/samuelegobbo.png")}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/enrico-pasetto-6a48a5193/"
            target="_blank"
          >
            <EmployeePic
              name="Enrico"
              surname="Pasetto"
              role="CTO"
              description="Descr3"
              imageLink={translateSrc("/employees/enricopasetto.png")}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dylan-le-hir-404003130/"
            target="_blank"
          >
            <EmployeePic
              name="Dylan"
              surname="Le Hir"
              role="CRO"
              description="Descr4"
              imageLink={translateSrc("/employees/dylanlehir.png")}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jacopo-armini-55544219a/"
            target="_blank"
          >
            <EmployeePic
              name="Jacopo"
              surname="Armini"
              role="Art Director"
              description="Descr5"
              imageLink={translateSrc("/employees/jacopoarmini.png")}
            />
          </Link>
          <Link
            href="https://www.instagram.com/paramount_hermes"
            target="_blank"
          >
            <EmployeePic
              name="Hermes"
              surname="Carraro"
              role="Illustrator"
              description="Descr6"
              imageLink={translateSrc("/employees/hermescarraro.png")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
