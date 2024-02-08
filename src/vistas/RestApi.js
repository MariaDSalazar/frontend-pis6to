import React, { useState, useEffect } from 'react';
import SideNavBar from "./../SideNavBar/SideNavBar";
import Chatbot from "./../chatbot/Chatbot";
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/ext-language_tools';

function RestApi() {

    const appContainerStyle = {
        display: "flex",
        width: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        maxHeight: "100%",
        flex: 1,
    };

    const contentContainerStyle = {
        margin: "35px 35px 35px 120px", // Aumenta 85px al margen izquierdo
        padding: "10px",
        background: "#EDFAFF3B",
        borderRadius: "25px",
        border: "25px solid transparent",
        width: "100%",
    };
    const contentFondo = {
        margin: "20px 20px", // Aumenta 85px al margen izquierdo
        padding: "10px",
        background: "#EDFAFF3B",
        borderRadius: "25px",
        border: "15px solid transparent",
        width: "100%",
    };

    const styleTitle = {
        margin: "35px 35px",
        fontSize: "48px",
        textAlign: "center"
    };
    const contenedorRow = {
        display: 'flex',
    };
    const contenedorCol2 = {
        flex: '1',
        marginBottom: '8px',
    };
    const URL_BACKEND_API = "https://computacion.unl.edu.ec/uv/api/";
    const lista_peticiones_get = {
        peticion1: { metodo: 'LISTA DISPOSITIVOS', peticion: URL_BACKEND_API + 'listar' },
        peticion2: { metodo: 'LISTA DISPOSITIVOS ACTIVOS', peticion: URL_BACKEND_API + 'activos' },
        peticion3: { metodo: 'MEDICIÓN PROMEDIO', peticion: URL_BACKEND_API + 'medicionPromedio' },
        peticion4: { metodo: 'MEDICIÓN DISPOSITIVOS', peticion: URL_BACKEND_API + 'medicionDispositivos' },
    };
    const lista_peticiones_post = {
        peticion1: { metodo: 'PROMEDIO POR FECHAS', peticion: URL_BACKEND_API + 'medicionFechas' },
        peticion2: { metodo: 'PROMEDIO POR SEMANAS', peticion: URL_BACKEND_API + 'medicionSemana' },
        peticion3: { metodo: 'PROMEDIO POR DIA', peticion: URL_BACKEND_API + 'medicionDia' },
    };

    // Estado para almacenar la salida de cada petición
    const [outputs, setOutputs] = useState({});

    useEffect(() => {
        const fetchData = async (key, url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setOutputs(prevState => ({
                    ...prevState,
                    [key]: JSON.stringify(data, null, 2)
                }));
            } catch (error) {
                console.error('Error fetching API:', error);
                setOutputs(prevState => ({
                    ...prevState,
                    [key]: `Error fetching API: ${error.message}`
                }));
            }
        };
        Object.entries(lista_peticiones_get).forEach(([key, item]) => fetchData(key, item.peticion));
        Object.entries(lista_peticiones_post).forEach(([key, item]) => fetchData(key, item.peticion));
    }, []); // El array vacío como segundo argumento asegura que el efecto se ejecute solo una vez al cargar la página

    const renderPeticiones = (lista) => {
        return Object.keys(lista).map((key) => (
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }} key={key}>
                <div style={{ marginBottom: '10px', flex: 1 }}>
                    <h3 style={{ color: 'black', textAlign: 'left' }}>{lista[key].metodo}</h3>
                    <p style={{ textAlign: 'left' }}>{lista[key].peticion}</p>
                </div>
                <div style={{ marginLeft: '10px', marginRight: '10px' }}> {/* Agregamos margen izquierdo y derecho de 10px */}
                    <AceEditor
                        mode="json"
                        theme="twilight"
                        name={`output-editor-${key}`}
                        editorProps={{ $blockScrolling: Infinity }}
                        value={outputs[key] || ''} // Utilizar la salida correspondiente a la petición actual
                        style={{ height: '200px', fontSize: "20px", width: 'calc(100% - 20px)' }} 
                        readOnly={true} />
                </div>
            </div>
        ));
    };    
    
    return (
      <div style={appContainerStyle} className="desktop-1">
    <div style={{ position: 'fixed' }}> {/* Aplicamos posición fija al contenedor SideNavBar */}
        <SideNavBar />
    </div>
    <div></div>
    <div style={contentContainerStyle}>
        <h1 style={styleTitle}>API</h1>
        <div style={contenedorRow}>
        <div style={{ ...contenedorCol2, ...contentFondo }}> {/* Añadimos un espacio a la derecha */}
             <h2>Consultas sin token</h2>
                <h3>GET</h3>
                <div>
                    {renderPeticiones(lista_peticiones_get)}
                </div>
            </div>
            <div style={{ ...contenedorCol2, ...contentFondo }}>
                <h2>Consultas con token</h2>
                <h3>POST</h3>
                <div>
                    {renderPeticiones(lista_peticiones_post)}
                </div>
            </div>
        </div>
    </div>
    <Chatbot />
</div>

    );
}

export default RestApi;