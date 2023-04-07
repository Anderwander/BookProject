import passport from "passport";


const isAuthorized = (req,res,next) =>{
    if(req.isAuthenticated()){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}


const isAdmin = (req,res,next) =>{
    if(req.isAuthenticated() && req.user.role === "admin"){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}


const authenticate = (req,res,next) =>{
    const returnTo = req.session.returnTo || "/";
    passport.authenticate("local", { failureRedirect: "/login", keepSessionInfo:true }, (err,user,info) => {
        if(err){
            return next(err);
        }
        if (!user) {
            return res.redirect("/login");
        }
        req.logIn(user, (err) =>{
            if(err){
                return next(err);
            }
            return res.redirect(returnTo);
        });
    })(req,res,next);
}

export {isAuthorized,isAdmin,authenticate};



