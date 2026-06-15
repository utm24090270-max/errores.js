import {Schema, model} from "mongoose";

const esqueleto_de_tabla = new Schema({
    matricula : String,
    materia : String,
    calificacion : Number,
    asistencia : Number,
    promedio : Number,
    grado : String
})
export const test = new model("Tabla de alumnos reprobados", esqueleto_de_tabla)