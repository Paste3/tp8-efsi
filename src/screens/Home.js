import Personas from "../components/Personas"
import DatosPersona from "../components/DatosPersona"
export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        Personas.map(datos => (
                            <DatosPersona
                                id={parseInt(datos.id)}
                                nombre={datos.nombre}
                                apellido={datos.apellido}
                                email={datos.email}
                                edad={datos.edad}
                            >
                            </DatosPersona>
                        ))
                    }
                </div>
            </div>
        </>
    )
}