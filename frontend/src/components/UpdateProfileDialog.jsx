import React, { useState } from "react";
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogFooter } from "./ui/dialog";
import { Label } from "./ui/label";
import {Input } from "./ui/input"
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const UpdateProfileDialog = ({ open, setOpen }) => {

  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]" onInteractOutside = {()=> setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  email
                </Label>
                <Input id="email" name="email" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                 Number
                </Label>
                <Input id="number" name="number" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input id="bio" name="bio" className="col-span-3" />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input id="skills" name="skills" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input id="file" name="file"  type="file" accept="application/pdf" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
            {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Update
            </Button>
          )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfileDialog;
