import * as React from "react";

function SignUpSection() {
  return (
    <section className="px-5 w-full max-md:max-w-full bg-gradient-to-b from-white to-blue-600">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e45c9483199563f0190c85ee44668f360f2de2a671d29a91701b4f663bc06029?apiKey=aef46c6d35324e9f8fe7768ac4e94287&"
            alt="Decorative image"
            className="w-full aspect-[0.96]"
          />
        </div>
        <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center mt-32 text-base max-md:mt-10 max-md:max-w-full">
            <h2 className="self-stretch text-6xl font-bold tracking-tighter text-center bg-clip-text leading-[70px] max-md:max-w-full max-md:text-4xl">
              Sign up for free today
            </h2>
            <p className="mt-12 tracking-normal text-2xl leading-6 text-center text-slate-900 max-md:max-w-full">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <div className="flex gap-4 mt-10 font-medium tracking-tight">
              <button className="justify-center text-xl self-start px-6 py-3 text-white bg-black rounded-xl">
                Get for free
              </button>
              <a
                href="#"
                className="flex gap-1 justify-center py-3 text-black text-xl rounded-xl"
              >
                <span>Learn more</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8d25a25c7c388151b46b94b4f5e735dc30af73ce86992d4351a95251ee17c70?apiKey=aef46c6d35324e9f8fe7768ac4e94287&"
                  alt="Arrow icon"
                  className="shrink-0 w-5 aspect-square"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/af839b9b4ee354a1757f1e3cbf085a6a561b4bda7d22a1ade248f64727e4dc8c?apiKey=aef46c6d35324e9f8fe7768ac4e94287&"
            alt="Decorative image"
            className="grow mt-28 w-full aspect-[1.01] max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
}

export default SignUpSection;