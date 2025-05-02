import React from "react";
import { Badge } from "@/components/ui/badge";

const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">Canada</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">Job description comes here, Click for more</p>
      </div>
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
  );
};

export default LatestJobCards;
