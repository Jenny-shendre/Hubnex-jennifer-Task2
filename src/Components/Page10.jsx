import * as React from "react";

function FooterLink({ children }) {
  return <div className="mt-5">{children}</div>;
}

function FooterSection({ title, links }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col text-xl whitespace-nowrap text-neutral-500 max-md:mt-10">
        <div className="font-bold text-white">{title}</div>
        {links.map((link, index) => (
          <FooterLink key={index}>{link}</FooterLink>
        ))}
      </div>
    </div>
  );
}

export default function MyComponent() {
  const sections = [
    {
      title: "Product",
      links: ["Features", "Integrations", "Updates", "FAQ", "Pricing"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers", "Manifesto", "Press", "Contact"],
    },
    {
      title: "Resources",
      links: ["Examples", "Community", "Guides", "Docs"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security"],
    },
  ];

  return (
    <footer className="flex gap-5 justify-between py-10 pr-2 pl-5 w-full bg-black max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col items-start text-sm text-stone-300">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9496f852acbf6fdd6fc2ec53c6acad53d3f8e329c9dc20126f4a64613a00497a?apiKey=aef46c6d35324e9f8fe7768ac4e94287&"
          alt="Company logo"
          className="w-10 aspect-[0.98]"
        />
        <p className="self-stretch text-xl mt-5 w-[40%]">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website.
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae2e79d9097bda90e8dbc287b3cb9722003c51b68f5ace1ce2118eccf1cad873?apiKey=aef46c6d35324e9f8fe7768ac4e94287&"
          alt=""
          className="mt-36 max-w-full aspect-[8.33] w-[275px] max-md:mt-10"
        />
      </div>
      <div className="self-start">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {sections.map((section, index) => (
            <FooterSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
      </div>
    </footer>
  );
}