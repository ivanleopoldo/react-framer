import React from "react";
import { Heading, Subtitle } from "../components/text";
import { CustomButton } from "../components/buttons";

function ConfirmationPage() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-zinc-900 gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <Heading text={"Are you sure?"} />
          <Subtitle text={"Once accepted there is no turning back"} />
        </div>
        <div className="flex justify-end w-full gap-2">
          <CustomButton text={"NO"} customCSS={"bg-red-500"} path="/" />
          <CustomButton
            text={"YES"}
            customCSS={"bg-green-600"}
            path="/landing"
          />
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
