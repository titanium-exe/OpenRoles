import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup} from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" placeholder="" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="text" placeholder="" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="text" placeholder="" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-3 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Applicant"
                  className="w-5 h-5 cursor-pointer"
                />
                <Label htmlFor="r1">Applicant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  className="w-5 h-5 cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex w-1/2 items-center gap-2">
            <Label>Photo</Label>
            <Input accept="image/*" type="file" className="cursor-pointer" />
          </div>
          <Button type="submit" className="w-full my-4">
            Sign Up
          </Button>
          <div className="flex justify-center mt-4">
            <span className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-teal-700">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
