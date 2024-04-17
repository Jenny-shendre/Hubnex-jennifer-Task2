import * as React from "react";

function MyComponent() {
  return (
    <div className="flex bg-blue-200 flex-col justify-center px-12 py-20 max-md:px-5">
      <div className="flex flex-col mt-8 max-md:max-w-full">
        <div className="flex flex-col self-center max-w-full w-[540px]">
          <div className="justify-center self-center px-3.5 text-sm font-medium tracking-tight leading-8 text-black rounded-xl border border-solid border-neutral-800 border-opacity-10">
            Boost your productivity
          </div>
          <div className="flex flex-col mt-5 text-center max-md:max-w-full">
            <div className="text-6xl font-bold tracking-tighter bg-clip-text leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
              A more effective way to track progress
            </div>
            <div className="mt-5 text-2xl tracking-tighter leading-8 text-slate-900 max-md:max-w-full">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website in just minutes with the set of free
              components for Framer.
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9588edc890b7a0fac180f4314cdc67334633f475eb9450da84228632f489a6fd?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9588edc890b7a0fac180f4314cdc67334633f475eb9450da84228632f489a6fd?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9588edc890b7a0fac180f4314cdc67334633f475eb9450da84228632f489a6fd?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9588edc890b7a0fac180f4314cdc67334633f475eb9450da84228632f489a6fd?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9588edc890b7a0fac180f4314cdc67334633f475eb9450da84228632f489a6fd?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9588edc890b7a0fac180f4314cdc67334633f475eb9450da84228632f489a6fd?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9588edc890b7a0fac180f4314cdc67334633f475eb9450da84228632f489a6fd?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9588edc890b7a0fac180f4314cdc67334633f475eb9450da84228632f489a6fd?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
          className="mt-10 w-full shadow-2xl aspect-[1.75] max-md:max-w-full"
        />
        <div className="mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-10 text-black max-md:mt-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d871e3a77d696f5f6cef786897904a542568b459aec91c09ebf12f55f6362344?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
                  className="w-6 aspect-square"
                />
                <div className="mt-2.5 text-2xl font-bold tracking-tight">
                  Integration ecosystem
                </div>
                <div className="flex flex-col mt-2.5 text-xl tracking-normal">
                  <div className="leading-6">
                    Track your progress and motivate your efforts everyday.
                  </div>
                  <div className="flex gap-1 pr-7 mt-2.5 rounded-xl leading-[144%] max-md:pr-5">
                    <div>Learn more</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11d088866ee4efcdd55801e4a908f6a82aeb7e014b66a7f6e7c34f086c5a3b9?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
                      className="shrink-0 self-start aspect-[0.95] w-[19px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[20%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-10 text-black max-md:mt-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/11097af76a0e8452685c1711de4ffd203cb821bbb38246a2e1674ac549254459?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
                  className="w-6 aspect-square"
                />
                <div className="mt-2.5 text-2xl font-bold tracking-tight">
                  Goal setting and tracking
                </div>
                <div className="flex flex-col mt-2.5 text-xl tracking-normal">
                  <div className="leading-6">
                    Set and track goals with manageable task breakdowns.
                  </div>
                  <div className="flex gap-1 pr-7 mt-2.5 rounded-xl leading-[144%] max-md:pr-5">
                    <div>Learn more</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11d088866ee4efcdd55801e4a908f6a82aeb7e014b66a7f6e7c34f086c5a3b9?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
                      className="shrink-0 self-start aspect-[0.95] w-[19px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[20%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-10 text-black max-md:mt-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/50ef6adbb4d2bf3202a0c1c0cac9b5db63f64c529564f24a84472665de497742?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
                  className="w-6 aspect-square"
                />
                <div className="mt-2.5 text-2xl font-bold tracking-tight">
                  Secure data encryption
                </div>
                <div className="flex flex-col mt-2.5 text-xl tracking-normal">
                  <div className="leading-6">
                    Ensure your data’s safety with top- tier encryption.
                  </div>
                  <div className="flex gap-1 pr-7 mt-2.5 rounded-xl leading-[144%] max-md:pr-5">
                    <div>Learn more</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11d088866ee4efcdd55801e4a908f6a82aeb7e014b66a7f6e7c34f086c5a3b9?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
                      className="shrink-0 self-start aspect-[0.95] w-[19px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[20%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-10 text-black max-md:mt-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1d735bad8e3f5b433d4876cb40acd86623f50c6109ead2fcf08bcee51034281?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
                  className="w-6 aspect-square"
                />
                <div className="mt-2.5 text-2xl font-bold tracking-tight">
                  Customizable notifications
                </div>
                <div className="flex flex-col mt-2.5 text-xl tracking-normal">
                  <div className="leading-6">
                    Get alerts on tasks and deadlines that matter most.
                  </div>
                  <div className="flex gap-1 pr-7 mt-2.5 rounded-xl leading-[144%] max-md:pr-5">
                    <div>Learn more</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a11d088866ee4efcdd55801e4a908f6a82aeb7e014b66a7f6e7c34f086c5a3b9?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
                      className="shrink-0 self-start aspect-[0.95] w-[19px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyComponent;