
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
    forgot(req,res){
    
    }
}