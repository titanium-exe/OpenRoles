import React from "react";
import LatestJobCards from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-28 px-4">
      {/* Centered heading */}
      <h1 className="text-4xl font-bold text-center">
        <span className="text-[#1b5656]">Latest</span>{" "}
        <span className="text-black">Job Openings</span>
      </h1>

      {/* Grid centered with even spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 place-items-center">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestJobCards key={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;

