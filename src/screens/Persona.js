import { useParams } from "react-router-dom";
import Personas from "../components/Personas"
import React from "react";
import { useState } from "react";
export default function Persona(props) {
    const [listaPersonas, setListaPersonas] = useState(Personas);
    const { IdPersona } = useParams();
    return (
        <>
            <div className="cardww">
                {
                    listaPersonas.map((persona => {
                        if (persona.id === IdPersona) {
                            return (
                                <>
                                    <div className="card border-dark mb-3" >
                                        <div className="card-header">{persona.nombre} {persona.apellido}</div>
                                        <div className="card-body text-dark">
                                            <p>Email: {persona.email}</p>
                                            <p>Edad: {persona.edad}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    }))
                }
            </div>
        </>
    )
}