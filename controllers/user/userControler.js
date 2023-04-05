
import User from "../../models/user.js";
import bcrypt from "bcrypt";
import Usersql from "../../models/usersql.js";


// crear usuario
const create = async(req,res) => {
   try{
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    const username = req.body.username.toLowerCase();
    let data= {
    username: username,
    password: hashedPassword,
    email: req.body.email,
    role: "user",
    }

    let user = await User.create(data);
    let userslq= await Usersql.create({username});
    res.redirect("/login");
   } catch (error){
    res.redirect("/register?error="+error.message);
   }
}





// login
const login = async (req,res) => {
    const username = req.body.username.toLowerCase();
    let user = await User.findOne({username:username});
    if (!user) {
        res.status(404).send("El usuario no existe");
       return;
    } 
    let password= req.body.password;
        if(await bcrypt.compare(password,user.password)){// user.password del has y el otro sin ecncriptacion
        res.send("Usuario y contraseña correctos");
    }
         else{
        res.status(401).send("Contraseña incorrecta");
    }
}


const logout = (req,res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
        }
            res.redirect("/");
        });
     }      


//login form

const loginForm =async (req,res) => {
res.render("user/login");
}

const registerForm =async (req,res) => {
    const error = req.query.error;
    res.render("user/register",{ message:error});
    }


const getAll  = async (req,res) => {
    try {
const users = await User.find();
res.status(200).json(users);
    } catch (error) {
res.status(404).json({ message: error.message})
    }
}

export default {create, login, loginForm, registerForm, getAll, logout};