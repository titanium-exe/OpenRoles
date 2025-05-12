import { job } from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
    const userId = req.id;

    if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
      return res.status(400).json({
        message: "something is missing",
        success: false
      })
    };

    const newjob = await job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: userId

    })

    return res.status(201).json({
      message: "new Job created successfuly",
      newjob,
      success: true
    })

  } catch (error) {
    console.log(error);
  }
}

// for job appliers 
export const getAllJobs = async (req, res) => {

  try {
    // filter 
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ]
    };
    

    // I am comming back here 
    const jobs = await job.find(query).populate({
      path: "company"
    }).sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false
      })
    }

    return res.status(200).json({
      jobs,
      success: true
    });

  } catch (error) {
    console.log(error);
  }
}


// for job appliers 

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job_ = await job.findById(jobId).populate({
      path:"applications"
    });

    if (!job_) {
      return res.status(404).json({
        message: "no job found",
        success: true
      })
    };

    return res.status(200).json({
      job_,
      success: true
    });


  } catch (error) {
    console.log(error);
  }
}


// for job creators 
export const getCreatedJobs = async (req, res) => {
  try {
    const creatorId = req.id;
    const jobs = await job.find({ created_by: creatorId });
    if (!jobs) {
      return res.status(404).json({
        message: "no job found",
        success: true
      })
    }

    return res.status(200).json({
      jobs,
      success: true
    })


  } catch (error) {
    console.log(error);
  }
}