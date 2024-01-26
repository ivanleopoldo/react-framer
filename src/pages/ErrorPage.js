import React from "react";
import { Heading } from "../components/text";
import { SadCat } from "../components/cat";
import { CustomButton } from "../components/buttons";

function ErrorPage() {
  return (
    <div className="flex bg-zinc-900 h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-4">
        <Heading
          text={"ERROR: 404"}
          customCSS={"text-4xl font-bold text-red-500"}
        />
        <SadCat />
        <CustomButton
          text={"Back"}
          customCSS={
            "text-white text-opacity-50 bg-zinc-800 bg-opacity-40 border-2 border-zinc-400 border-opacity-5"
          }
          path="/"
        />
      </div>
    </div>
  );
}

export default ErrorPage;
