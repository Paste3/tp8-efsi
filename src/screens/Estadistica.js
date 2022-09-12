import Personas from "../components/Personas"
export default function Estadistica() {
    var mayores = [];
    let mayores35 = [];
    for(let i = 0;i<Personas.length;i++){
        if(Personas[i].edad > 35){
            mayores35.push(Personas[i].nombre);
        }
        if(Personas[i].edad == mayores[i]){
            mayores.push(Personas[i].edad);
        }
        else{
            mayores[i] = Personas[i].edad;
        }
    }
    return (
        <>
            <p>Estadistica</p>
        </>
        )
}