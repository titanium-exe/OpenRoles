import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="" />
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
          <Button type="submit" className="w-full my-4">
            Login
          </Button>
          <div className="flex justify-center mt-4">
            <span className="text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="font-bold text-teal-700">
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
