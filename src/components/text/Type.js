import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

function CursorBlinker() {
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
  };
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block mx-1 h-6 w-[2px] translate-y-1 bg-white"
    />
  );
}

function Type(props) {
  const index = useMotionValue(0);

  const baseText = useTransform(index, (latest) => props.texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 1,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (index.get() === props.texts.length - 1) {
            index.set(0);
          } else {
            index.set(index.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, [count, index, props.texts.length, updatedThisRound]);

  return (
    <span
      className={twMerge(
        "text-2xl font-bold text-white inline",
        props.customCSS
      )}
    >
      <motion.span style={{ fontFamily: "monospace" }}>
        {displayText}
      </motion.span>
      <CursorBlinker />
    </span>
  );
}

export default Type;
