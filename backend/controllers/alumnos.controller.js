import { tabla } from "../models/alumnos.model.js"

tabla.create({
    matricula : "UTM58392017",
    materia : "Calculo diferencial",
    calificacion : 6,
    asistencia : 20,
    promedio : 5.5,
    grado : "quinto"
},
{
    matricula : "utm10487635",
    materia : "Programacion orientada a objetos",
    calificacion : 7,
    asistencia : 15,
    promedio : 9.12,
    grado : "quinto"
},
{
    matricula : "utm92745108",
    materia : "Liderazgo de equipos de alto desempeño",
    calificacion : 10,
    asistencia : 20,
    promedio : 10,
    grado : "quinto"
},
{
    matricula : "ut36019472",
    materia : "Calculo integral",
    calificacion : 9,
    asistencia : 10,
    promedio : 8.3,
    grado : "quinto"
},
{
    matricula : "utm81570346",
    materia : "Machine learning",
    calificacion : 8,
    asistencia : 12,
    promedio : 7.1,
    grado : "quinto"
},
{
    matricula : "utm24963851",
    materia : "Sociologia",
    calificacion : 4,
    asistencia : 2,
    promedio : 6,
    grado : "quinto"
},
{
    matricula : "utm70158294",
    materia : "Geografia",
    calificacion : 2,
    asistencia : 7,
    promedio : 8,
    grado : "quinto"
},
{
    matricula : "utm43891720",
    materia : "Leyes",
    calificacion : 1,
    asistencia : 9,
    promedio : 10,
    grado : "quinto"
},
{
    matricula : "utm69210583",
    materia : "Informatica",
    calificacion : 3,
    asistencia : 6,
    promedio : 7,
    grado : "quinto"
},
{
    matricula : "utm15782469",
    materia : "Redes",
    calificacion : 2,
    asistencia : 9,
    promedio : 5,
    grado : "quinto"
})
export const test = () => console.log("llamando controlador en app")