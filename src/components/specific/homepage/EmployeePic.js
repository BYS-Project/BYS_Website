import { P1, P1SP, P2 } from "@/components/text/Paragraphs";
import Image from "next/image";

export default function EmployeePic({
  name,
  surname,
  role,
  description,
  imageLink,
}) {
  return (
    <div className="group grid w-[15rem] xl:w-[32.5rem] md:w-[22.5rem] border-2 border-solid border-first rounded-xl p-[2.5%] hover:border-first sm:border-white transition-all duration-150 ease-in">
      <div className="flex gap-[5%]">
        <div className="relative aspect-square h-16 xl:h-24 md:h-20">
          <Image
            className="rounded-full group-hover:scale-110 transition-all duration-150 ease-in"
            src={imageLink}
            fill
            alt={`${name} ${surname}`}
          />
        </div>
        <div className="text-center w-full grid">
          <div className="font-extrabold">
            <P1SP className="group-hover:text-first sm:text-white text-first">
              {name}
            </P1SP>
            <P1SP className="group-hover:text-second sm:text-white text-second">
              {surname}
            </P1SP>
          </div>
          <P1SP className="group-hover:text-third font-bold sm:text-white text-third">
            {role}
          </P1SP>
        </div>
      </div>
      <div className="my-[2.5%] text-center group-hover:text-forth font-bold sm:text-white text-forth">
        <P2>{description}</P2>
      </div>
    </div>
  );
}
