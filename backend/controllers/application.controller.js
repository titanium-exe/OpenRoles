import { application } from "../models/application.model.js";
import { job } from "../models/job.model.js";


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
      job: jobId,
      applicant: userId,
    })

    if (!thisJob.applications) {
      thisJob.applications = [];
    }
    thisJob.applications.push(newApplication._id);
    await thisJob.save();

    return res.status(201).json({
      message: "Job applied succesfuly",
      success: true
    });

  } catch (error) {
    console.log(error);
  }
}

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const applications = await application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
      path: 'job',
      options: { sort: { createdAt: -1 } },
      populate: {
        path: 'company',
        options: { sort: { createdAt: -1 } }
      }
    });

    if (!applications) {
      return res.status(404).json({
        message: "You haven't applied to any jobs yet",
        success: false
      })
    }

    // return all the applications
    return res.status(200).json({
      applications,
      success: true
    });



  } catch (error) {
    console.log(error);
  }
}

// the creator of job will use this to check all 
// the applicants who have applied to a particular job
export const getApplicants = async (req, res) => {
  try {

    const targetJobId = req.params.id;
    const thisjob = await job.findById(targetJobId).populate({
      path: 'applications',
      options: { sort: { createdAt: -1 } },
      populate: {
        path: 'applicant'
      }
    });

    if (!thisjob) {
      return res.status(404).json({
        message: "Job not found",
        success: false
      })
    };

    return res.status(200).json({
      thisjob,
      success: true
    });

  } catch (error) {
    console.log(error);
  }
}

export const updateStatus = async (req, res) => {
  try {

    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({
        message: "Status is required",
        success: false
      })
    };

    // find the application by applicant ID 
    const application_ = await application.findOne({ _id: applicationId });
    if (!application_) {
      return res.status(400).json({
        message: "Application not found",
        success: false
      })
    };

    // update the status 
    application_.status = status.toLowerCase();
    await application_.save();

    return res.status(200).json({
      message: "Status Updated Successfuly",
      success: true
    })

  } catch (error) {
    console.log(error);
  }
}