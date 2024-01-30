import React from "react";
import SideNavBar from "./../SideNavBar/SideNavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chatbot from "./../chatbot/Chatbot";
import Mapa from "../mapa/Mapa";

function Modulos() {
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
            <div style={{ flexDirection: "row", flex: 1, width: "100%", height: "100%", ...scrollableContainerStyle }}>
                <div style={{ flex: 1, paddingTop: "1.5%", ...scrollableContainerStyle }}>
                    <div style={{ flex: 1, background: "rgba(255,255,255, 0.23)", padding: "1%", marginBottom: "2%", borderRadius: "20px", width: "98%", height: "90%", alignItems: "center", justifyContent: "center" }}>
                    <h2 style={{ fontSize: 30, margin: "0 0 1% 0", fontWeight: "900" }}>Mapa</h2>
                        <Mapa />
                    </div>
                </div>
                <div style={{ flex: 1, display: "flex", justifyContent: "space-between", width: "100%", height: "50%",  }}>
                    <div style={{ background: "rgba(255,255,255, 0.23)", width: "32%", height: "80%", borderRadius: "5%", minHeight: "330px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
                        <h2 style={{ paddingLeft: "1%", paddingRight: "1%" }}>Facultad salud de humana</h2>
                        <h1 style={{ fontSize: 100, marginTop: "auto", marginBottom: "5%" }}>8.45</h1>
                        <h2>Indice UV</h2>
                    </div>
                    <div style={{ background: "rgba(255,255,255, 0.23)", width: "32%", height: "80%", borderRadius: "5%", minHeight: "330px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
                        <h2 style={{ paddingLeft: "1%", paddingRight: "1%" }}>Facultad los recursos no renovables</h2>
                        <h1 style={{ fontSize: 100, marginTop: "auto", marginBottom: "5%" }}>9.36</h1>
                        <h2>Indice UV</h2>
                    </div>
                    <div style={{ background: "rgba(255,255,255, 0.23)", width: "32%", height: "80%", borderRadius: "5%", minHeight: "330px", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
                        <h2 style={{ paddingLeft: "1%", paddingRight: "1%" }}>Unidad de estudios a distancia</h2>
                        <h1 style={{ fontSize: 100, marginTop: "auto", marginBottom: "5%" }}>3.68</h1>
                        <h2>Indice UV</h2>
                    </div>
                </div>
            </div>
            <Chatbot />
        </div>
    );
}

export default Modulos;
