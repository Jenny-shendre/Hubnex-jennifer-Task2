import * as React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 py-3.5 text-sm bg-black max-md:px-5">
      <div className="flex flex-wrap gap-2 justify-center content-center px-1">
        <p className="text-white text-opacity-60">
          This page is included in a free SaaS Website Kit.
        </p>
        <div className="flex gap-1 text-white">
          <span>View the complete Kit</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e6a80a7c6695f91e27af3b7f0c6d4b2dbed6c1c8c6518a9a69a3274d07d4b3c?apiKey=2768ef1c8bd3495fa8e6289d98b44bb0&"
            alt="Arrow icon"
            className="shrink-0 self-start w-4 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
