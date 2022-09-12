import React from "react"
import { Link } from "react-router-dom"

export default function DatosPersona(props) {
    return (
        <>
            <div className="marCont col-md-3">
                <div className="card border-dark mb-3 cardw" >
                    <div className="card-header">{props.nombre} {props.apellido}</div>
                    <div className="card-body text-dark">
                        <Link to={'/persona/' + props.id}>
                            <button type="button" className="btn btn-secondary">Ver persona</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}