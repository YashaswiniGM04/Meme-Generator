import React from "react"
import trollFace from "../images/Troll_Face.png"
import "../index.css"

export default function Header(){
    return(
        <div className="header-div">
        <img className = "trollFace" src={trollFace}></img>
        <h2>Meme Generator</h2>
        <p className="check-out">check out!</p>
        </div>
    )
}

