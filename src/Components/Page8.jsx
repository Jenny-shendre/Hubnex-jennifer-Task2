import * as React from "react";

function TestimonialCard({ testimonial, name, username, avatarSrc }) {
  return (
    <div className="flex flex-col grow p-10 m-2 w-full text-base text-black bg-white rounded-3xl border border-solid shadow-lg border-zinc-100 max-md:px-5 max-md:mt-5">
      <p className="tracking-normal leading-6">{testimonial}</p>
      <div className="flex gap-2 mt-5 text-center">
        <img
          loading="lazy"
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className="shrink-0 rounded-full aspect-square w-[42px]"
        />
        <div className="flex flex-col">
          <div className="font-medium tracking-tight">{name}</div>
          <div className="tracking-normal leading-[144%]">{username}</div>
        </div>
      </div>
    </div>
  );
}

export default function MyComponent() {
  const testimonials = [
    {
      testimonial:
        "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      name: "Alex Rivera",
      username: "@jamietechguru00",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/af8c49c4d920c5a6bd43edbe1d6ad205abf80a63a2c79fe15d8b37419f8a16ff?apiKey=aef46c6d35324e9f8fe7768ac4e94287&",
    },
    {
      testimonial:
        "I was amazed at how quickly we were able to integrate this app into our workflow.",
      name: "Casey Jordan",
      username: "@caseyj",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0190e3edf1e2f261e2d91ed17506198a317eaf8ac13ca7202e17200a69c7352f?apiKey=aef46c6d35324e9f8fe7768ac4e94287&",
    },
    {
      testimonial:
        "Our team's productivity has skyrocketed since we started using this tool.",
      name: "Josh Smith",
      username: "@jjsmith",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/739955c09f41942d959ba11a1c5661e4bcfaf40c95e06a6eb02e081ba4f3d73c?apiKey=aef46c6d35324e9f8fe7768ac4e94287&",
    },
    {
      testimonial:
        "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      name: "Taylor Kim",
      username: "@taylorkimm",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/603063b058ef11158a18eb624b2a182c13816bc835eed74142e1741dd550166b?apiKey=aef46c6d35324e9f8fe7768ac4e94287&",
    },
    {
      testimonial:
        "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      name: "Jordan Patels",
      username: "@jpatelsdesign",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f22990b5d099c708ff768829c522e3404c2d31c8d41b7842eb6c052afb828360?apiKey=aef46c6d35324e9f8fe7768ac4e94287&",
    },
    {
      testimonial:
        "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      name: "Sam Dawson",
      username: "@dawsontechtips",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/644df7bf21ad70e3b993cdfdbe6dbcf6d35162791a4cfb49bbb1e6e6aa84c073?apiKey=aef46c6d35324e9f8fe7768ac4e94287&",
    },
    {
      testimonial:
        "This app has completely transformed how I manage my projects and deadlines.",
      name: "Morgan Lee",
      username: "@morganleewhiz",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4b4c477f9ad7fdb05ba6a489e7d69f4d089d4994f4b23b127879d1ce2f86677?apiKey=aef46c6d35324e9f8fe7768ac4e94287&",
    },
    {
      testimonial:
        "The customizability and integration capabilities of this app are top-notch.",
      name: "Riley Smith",
      username: "@rileysmith1",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d11d306ddf117431869edc8d29b9a78e9146aa9bab41599872706d5c55678d4?apiKey=aef46c6d35324e9f8fe7768ac4e94287&",
    },
    {
      testimonial:
        "Its user-friendly interface and robust features support our diverse needs.",
      name: "Casey Harper",
      username: "@casey09",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/62bb28239de101b2b2e0184ba77c691fd584d17d57d1301de43322f81419c165?apiKey=aef46c6d35324e9f8fe7768ac4e94287&",
    },
  ];

  return (
    <div className="flex flex-col items-center px-20 py-16 w-full max-md:px-5 max-md:max-w-full">
      <div className="justify-center px-3.5 ml-3.5 text-sm font-medium tracking-tight leading-8 text-black whitespace-nowrap rounded-xl border border-solid border-neutral-800 border-opacity-10">
        Testimonials
      </div>
      <h2 className="mt-5 ml-3.5 text-6xl font-bold tracking-tighter text-center bg-clip-text leading-[59.94px] max-md:max-w-full max-md:text-4xl">
        What our users say
      </h2>
      <div className="mt-12 w-full max-w-[1016px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <TestimonialCard {...testimonials[0]} />
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <TestimonialCard {...testimonials[1]} />
                  </div>
                </div>
              </div>
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <TestimonialCard {...testimonials[2]} />
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <TestimonialCard {...testimonials[3]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base text-black max-md:mt-5">
              <TestimonialCard {...testimonials[4]} />
              <TestimonialCard {...testimonials[5]} />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 w-full max-w-[1016px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <TestimonialCard {...testimonials[6]} />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <TestimonialCard {...testimonials[7]} />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <TestimonialCard {...testimonials[8]} />
          </div>
        </div>
      </div>
    </div>
  );
}