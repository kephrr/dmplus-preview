import { useEffect, useMemo, useState } from "react";

function TypingText({
  words,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseBeforeDelete = 1200,
  pauseBeforeType = 300,
  cursor = true,
  className = "text-3xl md:text-5xl font-semibold tracking-tight",
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBeforeDelete?: number;
  pauseBeforeType?: number;
  cursor?: boolean;
  className?: string;
}) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausingBeforeDelete" | "deleting" | "pausingBeforeType">("typing");

  useEffect(() => {
    if (!safeWords.length) return;

    const currentWord = safeWords[wordIndex % safeWords.length];

    let timeout = typingSpeed;

    const id = setTimeout(() => {
      switch (phase) {
        case "typing":
          if (charIndex < currentWord.length) {
            setCharIndex((c) => c + 1);
          } else {
            setPhase("pausingBeforeDelete");
          }
          break;

        case "pausingBeforeDelete":
          setPhase("deleting");
          break;

        case "deleting":
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setPhase("pausingBeforeType");
          }
          break;

        case "pausingBeforeType":
          setWordIndex((i) => (i + 1) % safeWords.length);
          setPhase("typing");
          break;
      }
    }, phase === "typing"
        ? typingSpeed
        : phase === "deleting"
        ? deletingSpeed
        : phase === "pausingBeforeDelete"
        ? pauseBeforeDelete
        : pauseBeforeType
    );

    return () => clearTimeout(id);
  }, [
    safeWords,
    wordIndex,
    charIndex,
    phase,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseBeforeType,
  ]);

  const text = safeWords[wordIndex % safeWords.length]?.slice(0, charIndex) ?? "";

  return (
    <span className={`inline-flex items-center ${className}`}>
      {text}
      {cursor && (
        <span
          aria-hidden
          className="ml-0.5 h-[1px] h-[1em] bg-current"
          style={{ animation: "blink 1s step-start infinite" }}
        />
      )}
      <style>{`@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:0}}`}</style>
    </span>
  );
}

export { TypingText };
