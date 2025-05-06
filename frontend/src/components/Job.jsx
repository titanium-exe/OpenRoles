import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge"; 
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = 'jobId';
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      {/* Top Row: Time & Bookmark */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-small">2 days ago</p>
        <Button variant="outline" className="rounded-md" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Company Info Section */}
      <div className="flex items-center gap-4 my-4">
        <Avatar>
          <AvatarImage
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/job-search-11676412-9520638.png?f=webp&w=512"
            className="h-12 w-12 object-contain"
          />
        </Avatar>

        <div>
          <h1 className="font-bold-medium text-lg ">Company</h1>
          <p className="text-sm text-gray-500">Canada</p>
        </div>
      </div>

      {/* Job Info Section */}
      <div>
        <h1 className="font-bold text-lg mb-1">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          modi expedita iusto consequuntur!
        </p>
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
      <div className='flex items-center gap-4 mt-4'>
        <Button onClick={() => navigate(`/description/${jobId}`)} variant="outline" className="">Details</Button>
        <Button variant="outline" className="bg-[#96bbb9]">Save</Button>
      </div>
    </div>
  );
};

export default Job;
