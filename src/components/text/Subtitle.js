import React from "react";

function Subtitle(props) {
  return (
    <div className="text-sm text-zinc-500 font-extralight text-opacity-80 px-4 py-2 rounded-xl bg-zinc-800 bg-opacity-50 border border-zinc-600 border-opacity-25">
      {props.text}
    </div>
  );
}

export default Subtitle;
