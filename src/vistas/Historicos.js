import { AreaElement, BarChart } from "@mui/x-charts";
import SideNavBar from "../SideNavBar/SideNavBar";
import Chatbot from "../chatbot/Chatbot";

const pData = [14.63, 3.4, 2.12, 10.7, 8.15, 3.45, 6.36];
const xLabels = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
];

const anios = [
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
    '2023',
    '2024',
];

const dias = [
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
];

function Historicos() {
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
                    <div style={{ flex: 1, alignItems: "center", justifyContent: "center", background: "rgba(255,255,255, 0.23)", borderRadius: "20px", width: "98%", height: "90%" }}>
                        <h2 style={{ fontSize: 30, margin: "0 0 1% 0", fontWeight: "900" }}>Diario</h2>
                        <div style={{widows: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <BarChart
                            width={window.innerWidth * 0.76}
                            height={window.innerHeight * 0.45}
                            
                            series={[
                                { data: pData, label: 'UV', id: 'uvId', color: 'skyblue'},
                                
                            ]}
                            xAxis={[{ data: dias, scaleType: 'band' }]}
                        />
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1, paddingTop: "1.5%", ...scrollableContainerStyle }}>
                    <div style={{ flex: 1, alignItems: "center", justifyContent: "center", background: "rgba(255,255,255, 0.23)", borderRadius: "20px", width: "98%", height: "90%" }}>
                        <h2 style={{ fontSize: 30, margin: "0 0 1% 0", fontWeight: "900" }}>Mensual</h2>
                        <div style={{widows: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <BarChart
                            width={window.innerWidth * 0.76}
                            height={window.innerHeight * 0.45}
                            
                            series={[
                                { data: pData, label: 'UV', id: 'uvId', color: 'green'},
                                
                            ]}
                            xAxis={[{ data: xLabels, scaleType: 'band' }]}
                        />
                        </div>
                    </div>
                </div>
                <div style={{ flex: 1, paddingTop: "1.5%", ...scrollableContainerStyle }}>
                    <div style={{ flex: 1, alignItems: "center", justifyContent: "center", background: "rgba(255,255,255, 0.23)", borderRadius: "20px", width: "98%", height: "90%" }}>
                        <h2 style={{ fontSize: 30, margin: "0 0 1% 0", fontWeight: "900" }}>Anual</h2>
                        <div style={{widows: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <BarChart
                            width={window.innerWidth * 0.76}
                            height={window.innerHeight * 0.45}
                            series={[
                                { data: pData, label: 'UV', id: 'uvId', color: 'blue' },
                                
                            ]}
                            xAxis={[{ data: anios, scaleType: 'band' }]}
                        />
                        </div>
                    </div>
                </div>
            </div>
            <Chatbot />
        </div>
    );
}

export default Historicos;