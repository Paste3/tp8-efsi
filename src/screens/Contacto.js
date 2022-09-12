import React from "react"

export default function Contacto() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="contact">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su nombre:" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su apellido:" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su email:" />
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su edad:" />
                                </div>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}