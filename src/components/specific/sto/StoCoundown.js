"use client";

import { H4 } from "@/components/text/Headers";
import { P1 } from "@/components/text/Paragraphs";
import { useCallback, useEffect, useRef, useState } from "react";

export default function StoCountdown({ deadlineReached }) {
  const interval = useRef(null);
  const deadline = useRef(1686404164);
  const DAYS_COEFF = 60 * 60 * 24;
  const HOURS_COEFF = 60 * 60;
  const [days, setDays] = useState(360);
  const [hours, setHours] = useState(24);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(60);
  const updateTimer = useCallback(() => {
    const now = Math.floor(Date.now() / 1000);
    let diff = deadline.current - now;
    if (diff > 0) {
      const days = Math.floor(diff / DAYS_COEFF);
      setDays(days);
      diff -= days * DAYS_COEFF;
      const hours = Math.floor(diff / HOURS_COEFF);
      setHours(hours);
      diff -= hours * HOURS_COEFF;
      const minutes = Math.floor(diff / 60);
      setMinutes(minutes);
      diff -= minutes * 60;
      setSeconds(diff);
    } else {
      deadlineReached();
    }
  }, [DAYS_COEFF, HOURS_COEFF, deadlineReached]);
  useEffect(() => {
    interval.current = setInterval(() => {
      updateTimer();
    }, 1000);
    return () => clearInterval(interval.current);
  }, [updateTimer]);
  return (
    <div className="grid grid-cols-7 grid-rows-2 gap-y-10">
      <H4>{days}</H4>
      <H4>:</H4>
      <H4>{hours}</H4>
      <H4>:</H4>
      <H4>{minutes}</H4>
      <H4>:</H4>
      <H4>{seconds}</H4>
      <div className="flex items-center justify-center">
        <P1 className="-rotate-90 w-full text-left">Days</P1>
      </div>
      <H4></H4>
      <div className="flex items-center justify-center">
        <P1 className="-rotate-90 w-full text-left">Hours</P1>
      </div>

      <H4></H4>
      <div className="flex items-center justify-center">
        <P1 className="-rotate-90 w-full text-left">Minutes</P1>
      </div>

      <H4></H4>
      <div className="flex items-center justify-center">
        <P1 className="-rotate-90 w-full text-left">Seconds</P1>
      </div>
    </div>
  );
}
