import jwt from 'jsonwebtoken';

const genrateToken = (userId, res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d'
    })
    res.cookie('jwt',token,{
        maxAge: 15*24*60*60*1000, // milliseconds
        httpOnly: true, //prevent XSS attacks cross site scripting
        sameSite:'strict',
        secure: process.env.NODE_ENV !== 'development' // cookie only works in https
    })
}

export default genrateToken;