import React, { useState } from 'react';
import { IoPersonOutline, IoLockClosedOutline, IoArrowBackSharp } from "react-icons/io5";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const appContainerStyle = {
        display: "flex",
        width: "100%",
        overflowX: "hidden",
        flex: 1,
    };

    const formContainerStyle = {
        position: "absolute",
        top: 150,
        left: 0,
        right: 0,
        bottom: 150,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "300px",
        backgroundColor: "rgba(255,255,255, 0.23)",
        padding: "20px",
        borderRadius: "25px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
    };

    const inputContainerStyle = {
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
        position: "relative",
    };

    const iconStyle = {
        position: "absolute",
        left: "10px",
        top: "50%", // Alinear el icono verticalmente
        transform: "translateY(-50%)", // Centrar verticalmente
        color: "#777",
    };

    const inputText = {
        fontSize: "14px",
        borderRadius: "30px",
        height: "30px",
        paddingLeft: "10%"
    };

    const button = {
        fontSize: 12,
        textAlign: "center",
        marginTop: "10px",
        color: "white",
        background: "#0C2342",
        borderRadius: "25px",
        height: "40px",
    };
    const buttonIzq = {
        fontSize: 12,
        textAlign: "center",
        marginTop: "10px",
        color: "white",
        background: "#0C2342",
        borderRadius: "25px",
        height: "40px",
        alignSelf: "flex-start", // Alinear a la izquierda
        display: "flex",
        alignItems: "center", // Centrar verticalmente el contenido del botón
        paddingLeft: "10px",
        width: "75px" // Agregar espacio a la izquierda del texto
    };

    return (
        <div style={appContainerStyle} className="desktop-1">
            <div style={{ flexDirection: "row", flex: 1, width: "100%", height: "100%" }}>
            <a style={buttonIzq} href="/dashboard"><IoArrowBackSharp style={{ marginRight: "5px" }} />Regresar</a>
                <div style={formContainerStyle} className="form-container">
                    <img src="logo2.svg" style={{ paddingLeft: "32%", width: "100px", height: "125px", marginBottom: "20px" }} alt="" />
                    <div style={inputContainerStyle}>
                        <IoPersonOutline style={iconStyle} className="icon" />
                        <input style={inputText}
                            type="email"
                            placeholder="Correo Electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={inputContainerStyle}>
                        <IoLockClosedOutline style={iconStyle} className="icon" />
                        <input style={inputText}
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button style={button}>Iniciar Sesión</button>
                    <p style={{ fontSize: 13, textAlign: "center", marginTop: "10px", color: "blue", marginBottom: "10px" }}>
                        ¿Aún no tienes una cuenta?
                    </p>
                    <a style={{ fontSize: 13, textAlign: "center", color: "blue", marginBottom: "10px" }} href="/register">Regístrate</a>
                </div>
            </div>
        </div>
    );
}

export default Login;

