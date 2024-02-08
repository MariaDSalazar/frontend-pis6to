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
            <div style={{ flexDirection: "row", flex: 1, width: "100%", height: "100%", ...scrollableContainerStyle }}>
                <div style={{ flex: 1, paddingTop: "1.5%", ...scrollableContainerStyle }}>
                    <div style={{ flex: 1, alignItems: "center", background: "rgba(255,255,255, 0.23)", borderRadius: "20px", width: "100%", height: "95%" }}>
                        <h2 style={{ fontSize: 30, margin: "0 0 1% 0", fontWeight: "900" }}>Solicitudes</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "25% 25% 25% 25%", alignItems: "center", width: "100%", height: "100%",}}>
                            <div style={{ background: "rgba(255,255,255, 0.23)", borderRadius: "20px", padding: "2%", display: "flex", flexDirection: "column", margin: "5%" }}>
                                <h4 style={{ textAlign: "center", }}>Patricio Betancourt</h4>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px", }}>Pato</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>patricio.unl.edu.ec</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>20 años</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>Estudiante</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>Universidad Nacional de Loja</a>
                                <div style={{margin: "5%"}}>
                                    <button style={{margin: "3%", background: "#0C2342", width: "40%", height: "100%", borderRadius: "20px", color: "white"}}>Rechazar</button>
                                    <button style={{margin: "3%", background: "#124E96", width: "40%", height: "100%", borderRadius: "20px", color: "white"}}>Aceptar</button>
                                </div>
                            </div>
                            <div style={{ background: "rgba(255,255,255, 0.23)", borderRadius: "20px", padding: "2%", display: "flex", flexDirection: "column", margin: "5%" }}>
                                <h4 style={{ textAlign: "center", }}>José Peña</h4>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px", }}>José</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>pepe.unl.edu.ec</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>35 años</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>Profesor</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>Universidad Nacional de Loja</a>
                                <div style={{margin: "5%"}}>
                                    <button style={{margin: "3%", background: "#0C2342", width: "40%", height: "100%", borderRadius: "20px", color: "white"}}>Rechazar</button>
                                    <button style={{margin: "3%", background: "#124E96", width: "40%", height: "100%", borderRadius: "20px", color: "white"}}>Aceptar</button>
                                </div>
                            </div>
                            <div style={{ background: "rgba(255,255,255, 0.23)", borderRadius: "20px", padding: "2%", display: "flex", flexDirection: "column", margin: "5%"  }}>
                                <h4 style={{ textAlign: "center", }}>Pedro Piñas</h4>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px", }}>Pedro</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>pedro.unl.edu.ec</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>52 años</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>Director</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>ESPE</a>
                                <div style={{margin: "5%"}}>
                                    <button style={{margin: "3%", background: "#0C2342", width: "40%", height: "100%", borderRadius: "20px", color: "white"}}>Rechazar</button>
                                    <button style={{margin: "3%", background: "#124E96", width: "40%", height: "100%", borderRadius: "20px", color: "white"}}>Aceptar</button>
                                </div>
                            </div>
                            <div style={{ background: "rgba(255,255,255, 0.23)", borderRadius: "20px", padding: "2%", display: "flex", flexDirection: "column", margin: "5%"  }}>
                                <h4 style={{ textAlign: "center", }}>Juan Cueva</h4>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px", }}>Juan</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>juean.unl.edu.ec</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>15 años</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>Estudiante</a>
                                <a style={{ textAlign: "left", fontWeight: "400", fontSize: "20px" }}>Unidad educativa la dolorosa</a>
                                <div style={{margin: "5%"}}>
                                    <button style={{margin: "3%", background: "#0C2342", width: "40%", height: "100%", borderRadius: "20px", color: "white"}}>Rechazar</button>
                                    <button style={{margin: "3%", background: "#124E96", width: "40%", height: "100%", borderRadius: "20px", color: "white"}}>Aceptar</button>
                                </div>
                            </div>
                            
                        </div>
                        <div style={{ widows: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>

                        </div>
                    </div>
                </div>

            </div>
            <Chatbot />
        </div>
    );
}

export default Solicitudes;