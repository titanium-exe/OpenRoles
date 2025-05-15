import { Company } from "../models/company.model.js"

export const registerCompany = async (req, res) => {
  try {

    const { companyName, location } = req.body;
    if (!companyName || !location) {
      return res.status(400).json({
        message: "company name or location is missing",
        success: false
      });
    };

    let company = await Company.findOne({ name: companyName , Canada});
    if (company) {
      return res.status(400).json({
        message: "This Company already exists",
        success: false
      })
    };

    company = await Company.create({
      name: companyName,
      location: location,
      userId: req.id
    });

    return res.status(201).json({
      message: "company registered succesfuly",
      company,
      success: true
    })

  } catch (error) {
    console.log(error);
  }
}

export const getCompany = async (req, res) => {
  try {

    const userId = req.id;  // user that is logged in and creating the company
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        message: "No Company found",
        success: false
      })
    };

  } catch (error) {
    console.log(error);
  }
}

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "company not found",
        success: false
      })
    };

    // if company found
    return res.status(200).json({
      company,
      success: true
    })

  } catch (error) {
    console.log(error);
  }
}

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;

    // cloudinary here

    const updateData = { name, description, website, location };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if(!company){
      return res.status(404).json({
        message:"company not found",
        success:false
      })
    };

    return res.status(200).json({
      message:"company information updated.",
      success:true
    });

  } catch (error) {
    console.log(error);
  }
}