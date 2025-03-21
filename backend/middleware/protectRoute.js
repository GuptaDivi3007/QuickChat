import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res
                .status(401)
                .json({ error: "Unauthorized - no token provided" });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if (!decode) {
            return res
                .status(401)
                .json({ error: "Unauthorized - no token provided" });
        }
        const user = await User.findOne({_id:decode.userId}).select("-password");

        if (!user) {
            return res.status(401).json({ error: "user not found" });
        }
        req.user = user;
        
        next();
    } catch (error) {
        console.log("error has occured in prootectRoute file", error);
        res.status(500).json({ error: "internal server error " });
    }
};

export default protectRoute;
