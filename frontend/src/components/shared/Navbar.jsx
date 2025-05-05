import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../ui/popover"; 
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="bg-white border-b">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        <h1 className="text-2xl font-bold">
          Open<span className="text-[#1b5656]">Roles!</span>
        </h1>

        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#5b8d89] hover:bg-[#2c5f71]">SignUp</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="h-11 w-11 rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-64 p-4 rounded-xl shadow-xl border bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="h-10 w-10 rounded-full"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Ekamleen</h4>
                    <p className="text-sm text-muted-foreground">She/Her/Hers</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 text-gray-700 hover:text-black"
                  >
                    <User2 className="h-4 w-4" />
                    View Profile
                  </Link>
                  <button className="flex items-center gap-2 text-gray-700 hover:text-black">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
