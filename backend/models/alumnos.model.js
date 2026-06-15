import { Schema, model } from "mongoose";

const Esqueleto_de_tabla = new Schema({
    Alumno:String,
    Calificacion: Number,
    Materia:String,
    Asistencia:Number,
    PromedioGral:Number,
    Grado:Number,

})
export const Tabla = new model ("Tabla de alumnos", Esqueleto_de_tabla)






