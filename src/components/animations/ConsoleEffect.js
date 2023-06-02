"use client";

import { useEffect, useRef, useState } from "react";

export default function ConsoleEffect({
  defaultPhrase,
  phrases,
  duration,
  timeoutBetween,
  additionalChar,
}) {
  const data = useRef({
    timeout: null,
    lastIndex: -1,
    direction: "compose",
    lastDirection: "decompose",
    delay: 0,
  });
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(additionalChar);
  useEffect(() => {
    let timeout = 0;
    const currentPhrase = defaultPhrase + phrases[index];
    if (index !== data.current.lastIndex) {
      data.current.delay = duration / currentPhrase.length;
      data.current.lastIndex = index;
      timeout = timeoutBetween ? timeoutBetween : 0;
    }
    if (data.current.direction !== data.current.lastDirection) {
      data.current.lastDirection = data.current.direction;
      timeout = timeoutBetween;
    }
    data.current.timeout = setTimeout(() => {
      if (data.current.direction === "compose") {
        data.current.timeout = setTimeout(() => {
          if (word.length === currentPhrase.length) {
            data.current.direction = "decompose";
          }
          setWord(
            word.replace(additionalChar, "") +
              currentPhrase.charAt(word.length - 1) +
              additionalChar
          );
        }, data.current.delay);
      } else {
        data.current.timeout = setTimeout(() => {
          if (word.length === 1) {
            setIndex((index + 1) % phrases.length);
            data.current.direction = "compose";
          }
          setWord(
            word.replace(additionalChar, "").substring(0, word.length - 2) +
              additionalChar
          );
        }, data.current.delay);
      }
    }, timeout);
  }, [
    additionalChar,
    defaultPhrase,
    duration,
    index,
    phrases,
    timeoutBetween,
    word,
  ]);
  return (
    <div className="relative">
      <div className="invisible">{phrases[index] + additionalChar}</div>
      <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
        {word}
      </div>
    </div>
  );
}
