import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    };
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: 'User already exist with this email.',
        success: false
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,

    });

    return res.status(200).json({
      message: "Account created Successfully",
      sucesss: true,
    });

  } catch (error) {
    console.log(error);
  }
}

export const login = async (req, res) => {
  try {

    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: 'incorrect email or password',
        success: false,
      })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: 'incorrect email or password',
        success: false,
      })
    }

    // check the role 
    if (role != user.role) {
      return res.status(400).json({
        message: 'account doesnt exist with this role',
        success: false,
      })
    };

    const tokenData = {
      userID: user_id
    }

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile
    }


    // storing token in cookies 
    return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
      message: `Welcome Back ${user.fullname}`,
      user,
      success: true
    })


  } catch (error) {
    console.log(error);
  }
}

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logout successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export const updateProfile = async (req, res) => {
  try {

    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;
    if (!fullname || !email || !phoneNumber || !skills || !bio) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });

    };

    // cloudinary comes here

    const skillsArray = skills.split(",");
    const userId = req.id; // form the middleware authentication
    let user = await user.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false
      });
    }

    // updating data 
    user.fullname = fullname
    user.email = email
    user.phoneNumber = phoneNumber
    user.profile.bio = bio
    user.profile.skills = skillsArray

    // resume will be here
    await user.save();

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile
    }

    return res.status(200).json({
      message: "Profile Updated Successfully",
      user,
      success: true
    })

  } catch (error) {
    console.log(error);
  }
}
