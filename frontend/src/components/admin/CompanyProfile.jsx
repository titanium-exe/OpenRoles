import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner"; 
import { useSelector } from "react-redux";

const CompanyProfile = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const {singleCompany} = useSelector(store=>store.company);

  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);

    if (input.file) {
      formData.append("file", input.file);
    }

    // calling API
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({

    name: singleCompany.name || "",
    description: singleCompany.description|| "",
    website: singleCompany.website|| "",
    location:singleCompany.location ||  "",
    file: singleCompany.file || null,

    })
  }, [singleCompany]);

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className="flex items-center  gap-7 padding-8">
            <Button
             onClick={() => navigate("/admin/companies")}
              className="flex items-center gap-2 text-gray-500 font-semibold"
              variant="outline"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Profile</h1>
          </div>
          <div className="grid grid-cols-2 gap-2 my-10">
            <Label>Company Name</Label>
            <Input
              type="text"
              name="name"
              value={input.name}
              onChange={changeEventHandler}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 my-10">
            <Label>Description</Label>
            <Input
              type="text"
              name="description"
              value={input.description}
              onChange={changeEventHandler}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 my-10">
            <Label>Website</Label>
            <Input
              type="text"
              name="website"
              value={input.website}
              onChange={changeEventHandler}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 my-10">
            <Label>Location</Label>
            <Input
              type="text"
              name="location"
              value={input.location}
              onChange={changeEventHandler}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 my-10">
            <Label>Logo</Label>
            <Input
              name="file"
              type="file"
              accept="image/*"
              onChange={changeFileHandler}
            />
          </div>
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Update
            </Button>
          )}
          
        </form>
      </div>
    </div>
  );
};

export default CompanyProfile;
