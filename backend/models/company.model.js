import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  description:{
    type:String,
  },
  website:{
    type:String,
  },
  location:{
    type:String,
    required:true,
  },
  logo:{
    type:String,   // URL company logo 
  },
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
  }
}, {timestamps:true});

export const Company = mongoose.model("Job", jobSchema);