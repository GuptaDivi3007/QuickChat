import User from "../models/user.model.js";

export const getUsers= async(req,res)=>{
    try {

        const loggedInUserId = req.user._id;
        const fillterdUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password")

        res.status(200).json(fillterdUsers);
        
    } catch (error) {
        console.log("error in get user controller ",error);
        res.status(500).json({error:"Internal server error"});
    }
}