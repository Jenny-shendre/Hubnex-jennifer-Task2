import * as React from "react";

const IntegrationEcosystemCard = () => (
  <div className="flex flex-col grow justify-center p-10 text-center rounded-3xl border border-solid shadow-lg border-zinc-900 border-opacity-10 max-md:px-5 max-md:mt-5 max-md:max-w-full">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dfbef3971e5d8618eaafd4886200f350a083c8a536226b0acb863da7d4e3ea5?apiKey=aef46c6d35324e9f8fe7768ac4e94287&" alt="" className="mx-7 w-full aspect-square max-md:mx-2.5" />
    <div className="flex flex-col px-5 text-justify md:px-2">
      <h3 className="self-center text-2xl font-bold tracking-tighter bg-clip-text leading-[60px]">
        Integration ecosystem
      </h3>
      <p className="text-base tracking-normal text-center leading-6 text-slate-900">
        Enhance your productivity by connecting with your favorite tools, keeping all your <br /> essentials in one
        place.
      </p>
    </div>
  </div>
);

const GoalSettingTrackingCard = () => (
  <div className="flex flex-col grow justify-center p-10 text-center rounded-3xl border border-solid shadow-lg border-zinc-900 border-opacity-10 max-md:px-5 max-md:mt-5 max-md:max-w-full">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/26bf731897e1f8d27c9372c81c4def1eca87192fa9cf4ab08fdb8ac03b60ea08?apiKey=aef46c6d35324e9f8fe7768ac4e94287&" alt="" className="mx-7 w-full aspect-square max-md:mx-2.5" />
    <div className="flex flex-col px-5">
      <h3 className="self-center text-2xl font-bold tracking-tighter bg-clip-text leading-[60px]">
        Goal setting and tracking
      </h3>
      <p className="text-base tracking-normal leading-6 text-slate-900">
        Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.
      </p>
    </div>
  </div>
);

function MyComponent() {
  return (
    <section className="flex flex-col justify-center items-center p-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="justify-center px-3.5 mt-3 text-sm font-medium tracking-tight leading-8 text-black rounded-xl border border-solid border-neutral-800 border-opacity-10">
        Everything you need
      </div>
      <h2 className="mt-5 text-6xl md:text-4xl md:w-[60%] font-bold tracking-tighter w-[40%] text-center bg-clip-text leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
        Streamlined for easy management
      </h2>
      <p className="mt-5 text-2xl tracking-tighter leading-8 w-[40%] text-center text-slate-900 max-md:max-w-full">
        Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and
        see your progress simply and quickly.
      </p>
      <div className="justify-center mt-16 mb-4 w-full max-w-[992px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <IntegrationEcosystemCard />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <GoalSettingTrackingCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyComponent;