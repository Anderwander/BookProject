import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user.js";

const localStrategy = new LocalStrategy({
    usernameField: "username", //el campo de usuario es username y aqui se puede usar el campo ue usa para ususario o contraseña con e q queires acceder
    passwordField: "password", //el campo de contraseña es password y aqui se puede usar el campo contrase
    session: true //para que se vuelva a usar la sesion
}, async (username, password, done) => { //done es la funcion que se ejecuta cuando se termina el proceso
    const user = await User.findOne({ username:username.toLowerCase() }); //se busca el usuario en la base de datos
    if (!user) { return done(null ,false); }
    if (!user.verifyPassword(password))
    { return done(null,false); }
    passport.serializeUser(user,(err,serializedUser) =>{
        return done(err,serializedUser);
    });
});

passport.serializeUser(function(user, cb) { //ejecuta cuando guarda el usuario y la guarda en sesion
process.nextTick(function() { //se ejecuta en el siguiente ciclo de eventos ejecuta cuando guarda el usuario y la guarda la sesion
    cb(null, {id: user.id, username: user.username, role: user.role}); //cargar el usuario
});

});
passport.deserializeUser(function(user,cb) { 
    process.nextTick(function() { // se eejecuta en el siguiente ciclo de eventos
       return cb(null, user); // devolvemos el usuario
    }); 
});

passport.use(localStrategy);


export default passport;