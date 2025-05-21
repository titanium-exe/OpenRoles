import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 



const LatestJobs = () => {
  const {allJobs} = useSelector(store=>store.job);


  return (
    <div className="max-w-7xl mx-auto my-28 px-4">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-[#1b5656]">Latest</span>{" "}
        <span className="text-black">Job Openings</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {allJobs.length <= 0 ? (
          <span>No Jobs Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestJobCards  key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
