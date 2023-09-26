import React from "react"
import logo from "../images/logo_react.png"

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt="react-logo" className="nav--icon"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}