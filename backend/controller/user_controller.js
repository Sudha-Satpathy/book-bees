import users from "../model/user_model.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await users.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const createdUser = new users({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    await createdUser.save();
    res.status(201).json({ message: "User created successfully", user:{
        _id:createdUser._id,
        fullname:createdUser.fullname,
        email:createdUser.email,
    } });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
 try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    else{
      res.status(200).json({message:"login successful", user:{
          _id:user._id,
          fullname:user.fullname,
          email:user.email,
      }})
    }
 } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal Server Error"})
 }
};
