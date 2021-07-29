const User = require('../models/user')
const crypto = require("crypto")

module.exports = {
    loginForm(req, res){
        return res.render("Admin/session/login.njk")
    },
    logout(req,res){
        req.session.destroy()
        return res.redirect("/admin/users/")
    },
    login(req,res){
        req.session.userId = req.user.id

        return res.redirect("/admin/users/")
    },
    forgotForm(req,res){
        return res.render("Admin/session/forgot-password")
    },
    async forgot(req,res){
         const user = req.user

        //criação do token
        const token = crypto.randomBytes(20).toString("hex")
        
        //expiração do token
        let now = new Date()
        now = now.setHours(now.getHours() + 1)

        await User.update(user.id, {
            reset_token: token,
            reset_token_expires: now
        })

        

        
    }
}