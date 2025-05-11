import React from "react";
import { Badge } from "@/components/ui/badge";

const LatestJobCards = ({ job }) => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 space-y-3">
      {/* Company Info */}
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">{job?.location}</p>
      </div>

      {/* Job Title & Description */}
      <div>
        <h2 className="font-bold text-xl">{job?.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{job?.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2 mt-2">
        <Badge className="rounded-md bg-[#f3f3f3] font-light" variant="ghost">
          {job?.position}
        </Badge>
        <Badge className="rounded-md bg-[#f3f3f3] font-light" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="rounded-md bg-[#f3f3f3] font-light" variant="ghost">
          ${job?.salary}k
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
