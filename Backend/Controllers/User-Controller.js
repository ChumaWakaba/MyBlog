import User from "../Models/UserModel.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
    let users;

    try{
        users = await User.find();
    } catch(err) {
        console.log(err);
        return res.status(400).json({ message: err.message});
    }
    if(!users)
    {
        return res.status(404).json({ message: "User not found"});
    }
    if(users)
    {
        return res.status(200).json({ users });
    }
};

export const signup = async (req, res) => {
    const {name, email, password} = req.body;
    let existingUser;

    try {
        existingUser = await User.findOne({email});
    }
    catch(err) {
        console.log(err);
    }
    if(existingUser)
    {
        return res.status(400).json({message: "User exists, please login"});
    }

    const hashedPassword = bcrypt.hashSync(password);
    let user = new User({name, email, password: hashedPassword});

    try {
        await user.save();
    }
    catch(err) {
        console.log(err);
    }

    return res.status(201).json({message: "User successfully created", user});
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email});
    }
    catch(err) {
        console.log(err);
    }

    if(!existingUser)
    {
        return res.status(404).json({message:"No user found with this email"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

    if(!isPasswordCorrect)
    {
        return res.status(404).json({message: "Incorrect Password"});
    }
    return res.status(200).json({message: "Logged in successfully", user: existingUser});
};