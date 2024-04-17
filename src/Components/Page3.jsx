import * as React from "react";
import cylinder from '../Components/cylinder.png'
import halftorus from '../Components/halftorus.png'

function VersionBadge() {
  return (
    <div className="justify-center self-start px-6 py-2.5 text-md tracking-tight text-black rounded-2xl border border-solid border-neutral-800 border-opacity-10">
      Version 2.0 is here
    </div>
  );
}

function Heading() {
  return (
    <h1 className="mt-7 text-8xl font-bold tracking-tighter bg-clip-text leading-[90px] max-md:max-w-full max-md:text-7xl max-md:leading-50">
      Pathway to productivity
    </h1>
  );
}

function Description() {
  return (
    <p className="mt-16 text-2xl tracking-tighter text-slate-900 max-md:max-w-full">
      Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.
    </p>
  );
}

function CTAButton() {
  return (
    <button className="justify-center self-start px-8 py-4 text-lg text-white bg-black rounded-xl">
      Get for free
    </button>
  );
}

function LearnMoreLink() {
  return (
    <div className="flex gap-1 justify-center py-4 text-black rounded-xl">
      <span className="text-lg"><a href="/">Learn more</a></span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11d088866ee4efcdd55801e4a908f6a82aeb7e014b66a7f6e7c34f086c5a3b9?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&" alt="" className="shrink-0 w-5 aspect-square" />
    </div>
  );
}

function HeroImage() {
  return (
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e1466a5b7c78578292914ef65b4d358d1429613e6424400c3077fbec4704966?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&" alt="Productivity app hero image" className="w-full aspect-square max-md:mt-5 max-md:max-w-full" />
  );
}

export default function MyComponent() {
  return (
    <section className="pt-5 pb-11 pl-11 max-md:pl-5 bg-gradient-to-b from-white to-blue-600 lg:h-[800px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto font-medium leading-8 max-md:mt-10 max-md:max-w-full">
            <VersionBadge />
            <Heading />
            <Description />
            <div className="flex gap-4 self-start mt-16 text-base tracking-tight">
              <CTAButton />
              <LearnMoreLink />
            </div>
          </div>
        </div>
        <div>
            <img className="hidden md:block lg:h-[200px] lg:ml-[10px] md:mt-10 " src={cylinder} alt="" />
          </div>
        <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
          <HeroImage />
          <div>
            <img className="hidden md:block lg:ml-[380px] lg:mt-[-100px]" src={halftorus} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
