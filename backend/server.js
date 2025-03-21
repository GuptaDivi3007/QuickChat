import express from "express"
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/message.routes.js"
import dbConnect from "./db/dbConnect.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js"
const PORT = process.env.PORT || 5000;
import {app ,server} from "./socket/socket.js"
import path from "path"
dotenv.config();

const __dirname = path.resolve();

app.use(express.json()) //to parse the incoming  requets with Json payloads (from req.body)
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(PORT, () => {
    dbConnect();
    console.log(`server started on http://localhost:${PORT}`);
});
