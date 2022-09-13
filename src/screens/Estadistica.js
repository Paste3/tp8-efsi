import Personas from "../components/Personas"
export default function Estadistica() {
    let mayores35 = [];
    let mayorEdad = [0];
    let menorEdad = [0];
    for (let i = 0; i < Personas.length; i++) {
        if (Personas[i].edad >= 35) {
            mayores35.push(Personas[i]);
        }
        for (let g = 0; g < mayorEdad[g]; g++) {
            if (Personas[i].edad > mayorEdad[g]) {
                mayorEdad.push(Personas[i].edad)
            }
            if (Personas[i].edad < menorEdad[g]) {
                menorEdad.push(Personas[i].edad)
            }
        }
    }
    return (
        <>
            <p>Personas mayores a 35 años({mayores35.length + 1}):</p>
            <ul>
                {
                    mayores35.map(mayor => (
                        <li> {mayor.nombre} </li>
                    ))
                }
            </ul>
        </>
    )
}