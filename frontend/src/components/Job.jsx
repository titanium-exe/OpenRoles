import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const daysAgoFunc = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDiff = currentTime - createdAt;
    return Math.floor(timeDiff/(1000*24*60*60));
  }

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      {/* Top Row: Time & Bookmark */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-small">{daysAgoFunc(job?.createdAt) == 0 ? "Today" : `${daysAgoFunc(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-md" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Company Info Section */}
      <div className="flex items-center gap-4 my-4">
        <Avatar>
          <AvatarImage
            src={job?.company?.logo}
          />
        </Avatar>

        <div>
          <h1 className="font-bold-medium text-lg ">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>

      {/* Job Info Section */}
      <div>
        <h1 className="font-bold text-lg mb-1">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge
          className={"rounded-md text-[] bg-[#f3f3f3] font-light"}
          variant="ghost"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          className={"rounded-md text-[] bg-[#f3f3f3] font-light"}
          variant="ghost"
        >
          {job?.jobType}
        </Badge>
        <Badge
          className={"rounded-md text-[] bg-[#f3f3f3] font-light"}
          variant="ghost"
        >
          ${job?.salary}k
        </Badge>
      </div>
      
      <div className="flex items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className=""
        >
          Details
        </Button>
        <Button variant="outline" className="bg-[#96bbb9]">
          Save
        </Button>
      </div>
    </div>
  );
};

export default Job;
