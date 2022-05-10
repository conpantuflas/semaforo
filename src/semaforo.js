import React, { useState } from "react";
import "./semaforo.css"

const Semaforo = () => {
    const [luzroja, setRoja] = useState("rgb(58, 3, 3)");
    const [luzyellow, setYellow] = useState("rgb(51, 51, 3)");
    const [luzgreen, setGreen] = useState("rgb(1, 37, 1)");

    const style = {
        rojo: {
            backgroundColor: luzroja
        },
        verde: {
            backgroundColor: luzgreen
        },
        amarillo:{
            backgroundColor: luzyellow
        }
    }


    return (
        <div id="contenedor">
            <div onClick={()=>{
                setRoja("red")
                setGreen("rgb(1, 37, 1)")
                setYellow("rgb(51, 51, 3)")
            }} className="colores" id="red" style={style.rojo}>hola</div>

            <div onClick={()=>{
                setYellow("yellow")
                setGreen("rgb(1, 37, 1)")
                setRoja("rgb(58, 3, 3)")

            }} className="colores" id="yellow" style={style.amarillo} >hola</div>

            <div onClick={()=>{
                setGreen("#a8ff00")
                setRoja("rgb(58, 3, 3)")
                setYellow("rgb(51, 51, 3)")
            }} className="colores" id="green" style={style.verde}>hola</div>
        </div>
    )
}

export default Semaforo