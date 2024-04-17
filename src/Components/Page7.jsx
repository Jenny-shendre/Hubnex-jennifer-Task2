import * as React from "react";

const CheckmarkIcon = ({isPopular}) => (
  <img
    loading="lazy"
    src= {isPopular ? "https://cdn.builder.io/api/v1/image/assets/TEMP/ea9a02261f9282eef63f5a4aa56d86bb8dbe125acb1ea5d119c936611cf35492?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/c4c13163366b528ee60bd2f9e52a077132a9ae29b2a97fbfac06dcff4a2db6f0?apiKey=aef46c6d35324e9f8fe7768ac4e94287&"}
    alt="Checkmark icon"
    className="shrink-0 w-6 aspect-square"
  />
);

const PricingCard = ({ plan, price, features, isPopular = false }) => (
  <div className={`flex flex-col px-10 py-11 mx-auto w-full rounded-3xl shadow-sm max-md:px-5 max-md:mt-6 ${isPopular ? 'bg-black mt-32' : 'bg-white border border-gray-100 border-solid mt-52'}`}>
    <header className="flex gap-5 justify-between px-px">
      <h3 className={`my-auto text-lg font-bold tracking-tight ${isPopular ? 'text-white text-opacity-60' : 'text-slate-500'}`}>
        {plan}
      </h3>
      {isPopular && (
        <div className="flex flex-col justify-center px-3.5 py-2.5 text-sm font-medium tracking-tight leading-8 rounded-xl">
          <span className="bg-clip text-white text-xl border border-opacity-60 rounded-2xl p-2">Most Popular</span>
        </div>
      )}
    </header>
    <div className="flex gap-1 mt-9 font-bold whitespace-nowrap">
      <div className={`text-6xl tracking-tighter leading-[59.94px] max-md:text-4xl ${isPopular ? 'text-white' : 'text-black'}`}>
        {price}
      </div>
      <div className={`px-px pt-6 pb-px my-auto text-lg tracking-tight ${isPopular ? 'text-neutral-400' : 'text-slate-500'}`}>
        /monthly
      </div>
    </div>
    <button className={`justify-center items-center px-4 py-2.5 mt-9 text-xl font-bold tracking-tight rounded-xl max-md:px-5 ${isPopular ? 'text-black bg-white' : 'text-white bg-black'}`}>
      {isPopular ? 'Sign up now' : 'Get started for free'}
    </button>
    <ul className="mt-9 space-y-8 text-xl">
      {features.map((feature, index) => (
        <li key={index} className={`flex gap-4 ${isPopular ? 'text-white' : 'text-black'}`}>
          <CheckmarkIcon isPopular={isPopular} />
          <span className="my-auto">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

function MyComponent() {
  const pricingPlans = [
    {
      plan: 'Free',
      price: '$0',
      features: [
        'Up to 5 project members',
        'Unlimited tasks and projects',
        '2GB storage',
        'Integrations',
        'Basic support',
      ],
    },
    {
      plan: 'Pro',
      price: '$9',
      isPopular: true,
      features: [
        'Up to 50 project members',
        'Unlimited tasks and projects',
        '50GB storage',
        'Integrations',
        'Priority support',
        'Advanced support',
        'Export support',
      ],
    },
    {
      plan: 'Business',
      price: '$19',
      features: [
        'Up to 5 project members',
        'Unlimited tasks and projects',
        '200GB storage',
        'Integrations',
        'Dedicated account manager',
        'Custom fields',
        'Advanced analytics',
        'Export capabilities',
        'API access',
        'Advanced security features',
      ],
    },
  ];

  return (
    <main className="flex flex-col items-center px-12 py-20 w-full max-md:px-5 max-md:max-w-full">
      <div className="justify-center px-3.5 text-sm font-medium tracking-tight leading-8 text-black rounded-xl border border-solid border-neutral-800 border-opacity-10">
        Boost your productivity
      </div>
      <h1 className="mt-5 text-6xl md:text-4xl font-bold tracking-tighter w-[40%] md:w-[60%] text-center bg-clip-text leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
        A more effective way to track progress
      </h1>
      <p className="mt-5 text-2xl tracking-tighter w-[40%] leading-8 text-center text-slate-900 max-md:max-w-full">
        Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
      </p>
      <section className="self-stretch mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="flex items-end w-[33%] max-md:ml-0 max-md:w-full">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MyComponent;