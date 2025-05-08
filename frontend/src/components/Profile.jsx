import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Contact, Mail, Pen, FileText } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["HTML", "CSS", "Java"];
const hasResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        {/* Profile Header */}
        <div>
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/job-search-11676412-9520638.png?f=webp&w=512"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p className="font-light text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, minima fugiat! Magnam consectetur deserunt molestiae
                alias accusamus.
              </p>
            </div>
            <div>
              <Button onClick={() => setOpen(true)} className="text-right" variant="outline">
                <Pen />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="my-5 space-y-2">
          <div className="flex items-center gap-3">
            <Mail className="text-gray-600" />
            <span className="font-light">abc@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="text-gray-600" />
            <span className="font-light">4567869876</span>
          </div>
          <div className="flex items-center gap-3">
            <FileText className="text-[#1b5656]" />
            {hasResume ? (
              <a
                href="https://anoopsarkar.github.io/compilers-class/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1b5656] hover:underline font-light"
              >
                Resume
              </a>
            ) : (
              <span className="font-extralight">N/A</span>
            )}
          </div>
        </div>

        {/* Skills */}
        <div className="my-5">
          <h1 className="font-medium text-md">Skills</h1>
          <div className="flex items-center gap-1 flex-wrap">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="rounded-md font-light my-2 mx-2"
                >
                  {item}
                </Badge>
              ))
            ) : (
              <span className="font-extralight">N/A</span>
            )}
          </div>
        </div>
       
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-md">
          <h1 className="font-bold text-lg">Applied Jobs</h1>
          {/* Application Table  */}
          <AppliedJobsTable />

        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
