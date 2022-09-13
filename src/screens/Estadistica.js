import Personas from "../components/Personas";
import Card from "../components/Card"

export default function Estadistica() {
    let objm = {
        edad: "200",
        nombre: "",
    }
    let objM = {
        edad: "0",
        nombre: "",
    }
    let mayores35 = [];
    let mayorEdad = [];
    let menorEdad = [];
    for (let i = 0; i < Personas.length; i++) {
        if (Personas[i].edad > 35) {
            mayores35.push(Personas[i]);
        }
        if (Personas[i].edad <= objm.edad) {
            objm.edad = Personas[i].edad;
            objm.nombre = Personas[i].nombre;
        }
        if (Personas[i].edad >= objM.edad) {
            objM.edad = Personas[i].edad;
            objM.nombre = Personas[i].nombre;
        }

        console.log(mayorEdad);
        console.log(menorEdad);
    }
    menorEdad.push(objm)
    mayorEdad.push(objM)
    return (
        <>
            <Card titulo="Personas mayores a 35 años" nombres={mayores35.map((mayor35) => (
                <p className="blanco"> {mayor35.nombre} ({mayor35.edad})</p>
            ))}></Card>
            <Card titulo="Persona mas grande" nombres={mayorEdad.map((mayor) => (
                <p className="blanco"> {mayor.nombre} ({mayor.edad})</p>
            ))}></Card>
            <Card titulo="Persona mas chica" nombres={menorEdad.map((menor) => (
                <p className="blanco"> {menor.nombre} ({menor.edad})</p>
            ))}></Card>
        </>
    );
}
