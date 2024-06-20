const usermodel = require('../model/usersmodel.js')

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