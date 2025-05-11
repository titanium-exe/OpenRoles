import { Badge } from "./ui/badge";
import React from "react";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = false;
  
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Job Title</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge
              className={"rounded-md text-[] bg-[#f3f3f3] font-light"}
              variant="ghost"
            >
              5 Positions
            </Badge>
            <Badge
              className={"rounded-md text-[] bg-[#f3f3f3] font-light"}
              variant="ghost"
            >
              Part-time
            </Badge>
            <Badge
              className={"rounded-md text-[] bg-[#f3f3f3] font-light"}
              variant="ghost"
            >
              Remote
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg text-white ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed text-white"
              : "bg-[#366d5e] hover:bg-teal-950 text-white"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply"}
        </Button>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job description</h1>
      <div className='my-4'>
      <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Burnaby</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, provident.</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2 yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>90k</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>5</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>5-05-2025</span></h1>
      </div>
    </div>
  );
};

export default JobDescription;
