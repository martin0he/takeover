"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  strings: string[];
  typingSpeed?: number;
  pause?: number;
  loop?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  strings,
  typingSpeed = 70,
  pause = 1800,
  loop = true,
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentString = strings[index];

    if (!deleting && charIndex < currentString.length) {
      timeout = setTimeout(() => {
        setText(currentString.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentString.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else {
      if (!deleting) {
        timeout = setTimeout(() => setDeleting(true), pause);
      } else {
        setDeleting(false);
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % strings.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, strings, typingSpeed, pause]);

  return (
    <div className="overflow-hidden whitespace-nowrap h-6 w-full text-center font-bold">
      <span>{text}</span>
    </div>
  );
};

export default Typewriter;
