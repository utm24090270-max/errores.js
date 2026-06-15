import mongoose from "mongoose"; //Librería para conexión de base de datos   
import express from "express"; // Librería para crear servidores
import cors from "cors"; // Librería para dar seguridad al servidor
import dotenv from "dotenv"; // Librería para configurar el documento .env;
import { test } from "./backend/controllers/alumnos.controllers.js";

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => console.log("Todo jala chido en la base de datos"))
.catch((error) => console.log("No esta jalando esta madre"))

const app = express();
app.use(cors());
app.listen(4000, () => {console.log("Esta jalando el servidor, no escucha borroso");});   
test();
