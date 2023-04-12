import express from "express";
import routerAPI from "./routes/api/router.js";
import routerView from "./routes/views/router.js"
import express_session from "express-session";
import passport from "./config/passport.js";
import aboutUsRouter from './routes/views/aboutus.js';
import contactoRouter from './routes/views/contacto.js';
import privacidadRouter from './routes/views/privacidad.js';


const app = express();

app.use('/', aboutUsRouter);
app.use('/', contactoRouter);
app.use('/', privacidadRouter);


app.use(express.static("public")); //carpeta publica para meter el css lo del front
app.use(express_session({ 
    secret: "lima",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.set("view engine", "pug");


app.use("/api", routerAPI); // el ruter estara en la ruta principal sino estarian apartir de ahi
app.use("/", routerView);

app.listen(3000, () => {
console.log("Server is running on port 3000"); // se ve en el servidor no en la consola del navegador
});
 

