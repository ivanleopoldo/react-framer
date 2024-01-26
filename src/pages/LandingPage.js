import React from "react";
import { Type } from "../components/text";
import { Navbar } from "../components/nav";

function LandingPage() {
  const texts = [
    "To making more memories with you <3",
    "Remember that I love you.",
    "Please study more.",
    "Goodluck in everything.",
    "I'll always support you.",
    "I might not be perfect but I'm giving my best to get better for you.",
    "I miss you.",
    "I love you.",
  ];
  return (
    <div className="flex flex-col h-screen w-screen bg-zinc-900">
      <div className="sticky">
        <Navbar />
      </div>
      <div className="flex justify-start m-5 ml-7 sm:m-10 md:m-20 lg:m-40">
        <Type texts={texts} customCSS={"font-light"} />
      </div>
    </div>
  );
}

export default LandingPage;
