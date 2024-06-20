const usermodel = require('../model/usersmodel.js')
const jwt = require('jsonwebtoken')

exports.registercontroller = (req,res)=>{
usermodel.registermodel(req.body.name,req.body.email,req.body.password).then((newuser)=>{
  res.json({status:"success !!!", newuser:newuser}).status(200)
}).catch((err)=>{
    res.json({status:"error", err:err.message}).status(400)
})
}


exports.logincontroller = (req,res)=>{
 usermodel.loginmodel(req.body.email,req.body.password).then((result)=>{
    if (result.token){
     res.cookie('token',result.token)
    }
    res.json({status:"success !!" , token :result.token , role : result.user.role})
 }).catch((err)=>{
    res.json({status:"error", err:err.message}).status(400)
 })
}


exports.logoutcontroller = (req,res)=>{
   res.clearCookie('token')
   res.json({status:"success !!" , message:"logged out successfully"})
}




const privatekey = "this my secret key hahahahahahahahahahahaha";

exports.verifytokenuser = async (req, res, next) => {
   let token = req.cookies.token;
   if (!token) {
     res.json({ msg: "access rejected !!!!!" });
   }
   try {
     const verifytoken = jwt.verify(token, privatekey);
     if (verifytoken) {
       next();
     }
   } catch (err) {
     res.json({ msg: err });
   }
 };