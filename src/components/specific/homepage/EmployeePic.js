import { P1 } from "@/components/text/Paragraphs";
import Image from "next/image";

export default function EmployeePic({ name, role, description, imageLink }) {
  return (
    <div className="flex p-2 items-center justify-center w-max h-full border-2 border-solid border-white rounded-xl">
      {/* Links to LinkedIn, Twitter or Instagram for artists */}
      <div className="flex flex-col gap-4">
        <div className="grid gap-2 grid-cols-2">
          <div className="relative flex items-center justify-center w-full h-full">
            <div className=" relative w-full h-full aspect-square max-h-[10vh] max-w-[10vh]">
              <Image className="rounded-full" src={imageLink} fill alt={name} />
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-2">
            <P1 className="font-bold">{name}</P1>
            <P1>{role}</P1>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <P1 className="w-[90%]">{description}</P1>
        </div>
      </div>
    </div>
  );
}
