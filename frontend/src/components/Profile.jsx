import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import React from "react";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";

const skills = ['abc','sdf','tgr','pop'];

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, minima fugiat! Magnam consectetur deserunt molestiae
                alias accusamus.
              </p>
            </div>
            <div>
              <Button className="text-right" variant="outline">
                <Pen />
              </Button>
            </div>
          </div>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>abc@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact /> 
            <span>4567869876</span>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          {
            skills.map((item, index)=> <Badge key={index}  variant="outline" className=" rounded-md font-light my-2 mx-2">{item}</Badge>)
          }
        </div>

      </div>
    </div>
  );
};

export default Profile;
