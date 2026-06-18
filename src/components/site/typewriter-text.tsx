import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  speedMs?: number;
};

export function TypewriterText({ text, className = "", speedMs = 38 }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    setDisplayed("");
    setDone(false);
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        setDone(true);
        window.clearInterval(timer);
      }
    }, speedMs);

    return () => window.clearInterval(timer);
  }, [text, speedMs]);

  return (
    <p className={className} aria-label={text}>
      <span aria-hidden="true">
        {displayed}
        {!done && (
          <span className="ml-0.5 inline-block w-[2px] h-[0.9em] align-middle bg-current animate-pulse" />
        )}
      </span>
    </p>
  );
}
