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
              description="I'm a creative, highly motivated person who has a passion for the Crypto industry. 
              I've worked in the cryptocurrency business for more than 6 years. I have experience in project management, data analysis, HR, and market and financial analysis."
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
              description="Since 2020, I have specialized in the NFT market as a passionate professional. I established myself as a content creator and copywriter, delivering unique and original ideas in the industry. "
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
              role="CTO/CDO"
              description="I am a full stack developer who has a love for anything IT. I have developed expertise in a number of programming languages, including C, Java, Solidity, and JavaScript, over the course of more than four years."
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
              description="I'm an experienced professional with a background in health management and software development. My skills include proficiency in Javascript, Angular, Swift, software development, cyber security, unit testing, and conformity."
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
              description="I'm a visionary Art Director and Digital Designer, passionate about creating captivating visual stories that inspire and engage audiences. My portfolio includes innovative work for BYS Project LTD, as well as unique freelance Digital Illustration projects and assisting in comic book design"
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
              description='As an Illustrator, I create artwork that resonates with audiences. I have experience working at Studio Valentino Villanova in Massanzago (PD), as well as showcasing my work as an EXPO Illustrator for the "I fumetti del Dese - Mostra di Mostri" exhibition.'
              imageLink={translateSrc("/employees/hermescarraro.png")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
