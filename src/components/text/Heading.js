import React from "react";
import { twMerge } from "tailwind-merge";

function Heading(props) {
  return (
    <div className={twMerge("font-black text-2xl text-white", props.customCSS)}>
      {props.text}
    </div>
  );
}

export default Heading;
