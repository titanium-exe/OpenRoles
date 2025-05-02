import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="px-4 py-2 mx-auto rounded-md bg-teal-700 text-[#ffffff] font-bold">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#1b5656] ">Dream Job</span>
        </h1>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 items-center gap-4 mx-auto rounded-md">
          <input
            type="text"
            placeholder="Find role that fits"
            className="outline-none border-none w-full py-2 rounded-md"
          />
          <Button className='rounded-r-md'>
            <Search className='h-5 w-5'/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
