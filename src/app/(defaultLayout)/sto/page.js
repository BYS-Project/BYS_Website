"use client";

import StoCountdown from "@/components/specific/sto/StoCoundown";
import { H4 } from "@/components/text/Headers";
import { P1 } from "@/components/text/Paragraphs";

export default function Sto() {
  return (
    <div className="relative w-full h-full grid gap-y-40 pb-20">
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
        <H4 className={"font-extrabold"}>Sto ending in:</H4>
        <br />
        <StoCountdown deadlineReached={() => {}} />
        <P1
          className={`absolute bottom-4 text-white rounded-full px-4 py-2 font-bold transition-all duration-150 ease-out border-2 border-solid border-white`}
        >
          Buy Token
        </P1>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <H4>What we offer</H4>
        <div>
          <P1>
            Magari una navbar con tutti i perks che gli investitori sbloccano in
            base a quanto investono.
          </P1>
          N free custom modules. Decisional power in DAO (se la facciamo). Free
          lifetime plan,...
        </div>
      </div>
      Mettiamo da qualche parte una barra con il totale dei fondi racconti
      finora?
    </div>
  );
}
