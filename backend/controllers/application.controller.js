import { application } from "../models/application.model";

export const applyJob = async (req, res) => {
  try {

    const userId = req.id;
    const { id: jobId } = req.params;
    if (!jobId) {
      return res.status(400).json({
        message: "jobId is required",
        success: false
      })
    };

    // check if user already applied to this job 
    const existing_applicant = await application.findOne({ job: jobId, applicant: userId });

    if (existing_applicant) {
      return res.status(400).json({
        message: "You've already applied to this job",
        success: false
      });
    };

    // check if the job doesn't exists 
    const thisJob = await job.findById(jobId);
    if (!thisJob) {
      return res.status(400).json({
        message: "This job doesn't exists",
        success: false
      });
    }

    // now finally create new application
    const newApplication = await application.create({
      job:jobId,
      applicant:userId,
    })

    job.applications.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message:"Job applied succesfuly",
      success:true
    });

  } catch (error) {
    console.log(error);
  }
}

export const getAppliedJobs = async (req,res) => {
  try {
    const userId = req.id;
    const applications = await application.find({applicant: userId}).sort({createdAt:-1}).populate({
      path:'job',
      options:{sort:{createdAt:-1}},
      populate:{
        path:'company',
        options:{sort:{createdAt:-1}}
      }
    });

    if(!applications){
      return res.status(404).json({
        message:"You haven't applied to any jobs yet",
        success:false
      })
    }
    
    // return all the applications
    return res.status(200).json({
      applications,
      success:true
    });
    


  } catch (error) {
    console.log(error);
  }
}

// the creator of job will use this to check all 
// the applicants who have applied to a particular job
export const getApplicants = async (req,res) => {
  try {

    const targetJobId = req.params.id;
    const thisjob = await job.findById(targetJobId).populate({
      path:'applications',
      options:{sort:{createdAt:-1}},
      populate:{
        path:'applicant'
      }
    });

    
    
  } catch (error) {
    console.log(error);
  }
}