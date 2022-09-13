import Personas from "../components/Personas"
export default function Estadistica() {
    let mayores35 = [];
    let mayorEdad = [];
    let nombresMenor = []
    let nombresMayor = []
    let menorEdad = [];
    var min = 200;
    var max = 0;
    var nombreMayor = "";
    var nombreMenor = "";
    for (let i = 0; i < Personas.length; i++) {
        if (Personas[i].edad > 35) {
            mayores35.push(Personas[i]);
        }
        if (Personas[i].edad <= min) {
            min = Personas[i].edad
            nombreMenor = Personas[i]
            menorEdad = []
            nombresMenor = []
            nombresMenor.push(nombreMenor)
            menorEdad.push(min)
        }
        if (Personas[i].edad >= max) {
            max = Personas[i].edad
            nombreMayor = Personas[i]
            mayorEdad = []
            nombresMayor = []
            nombresMayor.push(nombreMayor)
            mayorEdad.push(max)
        }
        console.log("min: " + min + " max: " + max);
        console.log("minimo: " + nombresMenor[i] + " maximo: " + nombresMayor[i]);
    }
    return (
        <>
            <p className="blanco">Personas mayores a 35 años({mayores35.length + 1}):</p>
            <ul>
                {
                    mayores35.map(mayor35 => (
                        <li className="blanco"> {mayor35.nombre} </li>
                    ))
                }
            </ul>
            <p className="blanco">Personas mayores a 35 años({mayorEdad.length + 1}):</p>
            <ul>
                {
                    mayorEdad.map(mayor => (
                        <li className="blanco"> {mayor.nombre} </li>
                    ))
                }
            </ul>
            <p className="blanco">Personas mayores a 35 años({menorEdad.length + 1}):</p>
            <ul>
                {
                    menorEdad.map(menor => (
                        <li className="blanco"> {menor.nombre} </li>
                    ))
                }
            </ul>
        </>
    )
}