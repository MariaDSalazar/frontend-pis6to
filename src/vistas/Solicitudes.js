import React from "react";
import SideNavBar from "./../SideNavBar/SideNavBar";
import Chatbot from "../chatbot/Chatbot";

function Solicitudes() {
    const appContainerStyle = {
        display: "flex",
        width: "100%",
        overflowX: "hidden",
        
        flex: 1,
    };

    const scrollableContainerStyle = {
        flex: 1,
        overflow: "auto",  // Agregamos overflow: auto para habilitar la barra de desplazamiento
    };

    return (
        <div style={appContainerStyle} className="desktop-1">
            <div>
                <SideNavBar></SideNavBar>
            </div>
        </div>
    );
}

export default Solicitudes;