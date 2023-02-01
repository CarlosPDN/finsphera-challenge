import React from "react"
import "./Header.css"

export default function Navbar() {
    return (
        <div className="headerArea">
            <div className="infoIcon">
                <p>Logo</p>
            </div>
            <div className="infoArea">
                <p className="infoItem">Acerca de nosotros</p>
                <p className="infoItem">¿Cómo Funciona?</p>
                <p className="infoItem">Contáctanos</p>
            </div>
        </div>
    )
}