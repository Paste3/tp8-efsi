import React from "react"

export default function Card(props) {

    return (
        <>
            <div className="cardww">
                <>
                    <div className="card border-dark mb-3" >
                        <div className="card-header">{props.titulo}</div>
                        <div className="card-body text-dark">
                            {props.nombres}
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}