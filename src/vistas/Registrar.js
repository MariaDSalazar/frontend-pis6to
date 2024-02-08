import React, { useState } from 'react';
import { IoArrowBackSharp } from "react-icons/io5";

function Registrar() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [username, setUsername] = useState('');
    const [institution, setInstitution] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const appContainerStyle = {
        display: "flex",
        width: "100%",
        overflowX: "hidden",
        flex: 1,
    };
    const formContainerStyle = {
        position: "absolute",
        top: 60,
        left: 0,
        right: 0,
        bottom: 60,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "95%",
        backgroundColor: "rgba(255,255,255, 0.23)",
        padding: "20px",
        borderRadius: "25px",
        alignItems: "center",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
    };
    const buttonIzq = {
        fontSize: 12,
        textAlign: "center",
        marginTop: "10px",
        color: "white",
        background: "#0C2342",
        borderRadius: "25px",
        height: "40px",
        alignSelf: "flex-start",
        display: "flex",
        alignItems: "center",
        paddingLeft: "10px",
        width: "75px"
    };
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    const inputGroupStyle = {
        display: "flex",
        marginBottom: "10px",
        alignItems: "center"
    };

    const inputStyle = {
        textAlign: "center",
        marginRight: "50px",
        fontSize: "14px",
        borderRadius: "30px",
        height: "45px",
        width: "450px"
    };
    const button = {
        fontSize: 12,
        textAlign: "center",
        marginTop: "10px",
        color: "white",
        background: "#0C2342",
        borderRadius: "25px",
        height: "40px",
        width: "200px"
    };

    return (
        <div style={appContainerStyle} className="desktop-1">
            <div style={{ flexDirection: "row", flex: 1, width: "100%", height: "100%" }}>
                <a style={buttonIzq} href="/dashboard"><IoArrowBackSharp style={{ marginRight: "5px" }} />Regresar</a>
                <div style={formContainerStyle} className="form-container">
                    <img src="logo2.svg" style={{width: "150px", height: "175px", marginBottom: "20px" }} alt="" />
                    <div style={containerStyle}>
                        <div style={inputGroupStyle}>
                            <input type="text" placeholder="Ingrese su Nombre" style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Ingrese la Institución" style={inputStyle} value={institution} onChange={(e) => setInstitution(e.target.value)} />
                        </div>
                        <div style={inputGroupStyle}>
                            <input type="text" placeholder="Ingrese su Apellido" style={inputStyle} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <input type="text" placeholder="Ingrese su rol" style={inputStyle} value={role} onChange={(e) => setRole(e.target.value)} />
                        </div>
                        <div style={inputGroupStyle}>
                            <input type="text" placeholder="Ingrese su Edad" style={inputStyle} value={age} onChange={(e) => setAge(e.target.value)} />
                            <input type="text" placeholder="Ingrese su correo" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div style={inputGroupStyle}>
                            <input type="text" placeholder="Ingrese su usuario" style={inputStyle} value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input type="text" placeholder="Ingrese su contraseña" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button style={button}>Registrar Cuenta</button>
                </div>
            </div>
        </div>
    );
}

export default Registrar;
