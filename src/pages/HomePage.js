import React, { useState } from "react";
import { RenderCat } from "../components/cat";
import { Heading } from "../components/text";
import { RunAwayButton } from "../components/buttons";

function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-zinc-900 gap-8">
      <Heading text={"can i be ur boyfriend?"} />
      <div className="flex p-8 bg-zinc-800 bg-opacity-15 border-2 border-zinc-800 border-opacity-25 rounded-xl">
        <RenderCat n={count} />
      </div>
      <div className="flex lg:w-1/6 md:w-1/3 sm:1/2 justify-center">
        <RunAwayButton n={count} callback={setCount} />
      </div>
    </div>
  );
}

export default HomePage;
