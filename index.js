import express from "express";
import routerAPI from "./routes/api/router.js";
import routerView from "./routes/views/router.js";
import session from "express-session";
import passport from "./config/passport.js";
import aboutUsRouter from "./routes/views/aboutus.js";
import contactoRouter from "./routes/views/contacto.js";
import privacidadRouter from "./routes/views/privacidad.js";
import sliceFirst from "./routes/views/sliceFirst.js";
import sliceSecond from "./routes/views/sliceSecond.js";
import sliceThird from "./routes/views/sliceThird.js";
import chatRouter from "./routes/views/chat.js";
import slice321 from "./routes/views/slice321.js";
import configuracionRouter from "./routes/views/configuracion.js";
import slice0 from "./routes/views/slice0.js";


const app = express();
app.use("/", aboutUsRouter);
app.use("/", contactoRouter);
app.use("/", privacidadRouter);
app.use("/", configuracionRouter);
app.use("/", sliceFirst);
app.use("/", sliceSecond);
app.use("/", sliceThird);
app.use("/", slice321);
app.use("/", slice0);
app.use("/", chatRouter);

app.use(express.static("public")); //carpeta publica para meter el css lo del front

/*app.use(
  express_session({
    secret: "lima",
    resave: false,
    //saveUninitialized: false,

    saveUninitialized: true,
  })
);*/

app.use(session({ secret: "lima" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.use("/api", routerAPI); // el ruter estara en la ruta principal sino estarian apartir de ahi
app.use("/", routerView);

app.listen(3000, () => {
  console.log("Server is running on port 3000"); // se ve en el servidor no en la consola del navegador
});
