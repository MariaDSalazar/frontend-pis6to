import React from "react";
import SideNavBar from "./SideNavBar/SideNavBar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PieChart } from "@mui/x-charts";
import { styled } from '@mui/material/styles';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { MdPlace } from "react-icons/md";
import { TbSunOff } from "react-icons/tb";
import { GiSunglasses } from "react-icons/gi";
import Chatbot from "./chatbot/Chatbot";

function App() {
	const appContainerStyle = {
		display: "flex",
		width: "100%", // Asegúrate de que ocupe todo el ancho
		overflowX: "hidden", // Evita el desbordamiento horizontal
		flex: 1,

	};

	const contentContainerStyle = {
		display: "flex",
		width: "100%", // Asegúrate de que ocupe todo el ancho
		overflowX: "hidden",
		flex: 1,
		height: "98%",
		flexDirection: "column",
	};


	/*
	  return (
		<div style={appContainerStyle}>
		  <div>
			<SideNavBar></SideNavBar>
		  </div>
		  <div style={contentContainerStyle}>
			<div class="desktop-1">
			  <section class="dashboard-frame">
				<div class="ubicacion-modulos-active-parent">
				  <div class="ubicacion-modulos-active">
					<div class="rectangle-parent">
					  <div class="frame-child"></div>
					  <b class="indice-uv">Indice UV</b>
					  <div class="ellipse-frame">
						<div class="historicos-text"></div>
						<div class="graphline-frame">11.50</div>
					  </div>
					</div>
					<div class="rectangle-group">
					  <div class="frame-item"></div>
					  <b class="ubicacin">Ubicación</b>
					  <div class="loja-ecuador">
						<img
						  class="icon-map-marker"
						  loading="eager"
						  alt=""
						  src="./public/-icon-map-marker.svg"
						/>
						<h3 class="loja-ecuador1">
						  <span class="loja-ecuador-txt-container">
							<p class="loja">Loja</p>
							<p class="ecuador">Ecuador</p>
						  </span>
						</h3>
					  </div>
					</div>
					<div class="rectangle-container">
					  <div class="frame-inner"></div>
					  <b class="mdulos-activos">Módulos activos</b>
					  <div class="div">5</div>
					</div>
				  </div>
				  <footer class="group-footer">
					<div class="rectangle-div"></div>
					<div class="recommendations-frame-parent">
					  <RecommendationsCarousel/>
					</div>
				    
	
				  </footer>
				</div>
			  </section>
			</div>
		  </div>
		</div>
	  );
	  */
	return (
		<div style={appContainerStyle} className="desktop-1">
			<div>
				<SideNavBar></SideNavBar>
			</div>
			<div style={contentContainerStyle}>
				{/*Primera parte*/}
				<div style={{ flex: 1, display: "flex", justifyContent: "space-between", width: "100%", padding: "1% 2% 2% 0%", }}>

					<div style={{ background: "rgba(255,255,255, 0.23)", width: "32%", borderRadius: "5%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", maxHeight: "450px" }}>
						<h1>Indice UV</h1>
						<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
							<PieChart
								series={[
									{
										data: [
											{ id: 0, value: 15, color: 'red' },
										],
										innerRadius: 50,
										outerRadius: 120,
										paddingAngle: 5,
										cornerRadius: 5,
										startAngle: -90,
										endAngle: 180,
										cx: 150,

									}]}
								width={300} height={250} style={{ alignSelf: "center", justifySelf: "center" }}>
								<PieCenterLabel>8.5</PieCenterLabel>
							</PieChart>

						</div>
					</div>


					<div style={{ background: "rgba(255,255,255, 0.23)", width: "32%", borderRadius: "5%", maxHeight: "450px" }}>
						<h1>Ubicación</h1>
						<MdPlace style={{ width: "100%", height: "50%", display: "flex", }} />
						<h1>Loja - Ecuador</h1>
					</div>

					<div style={{ background: "rgba(255,255,255, 0.23)", width: "32%", borderRadius: "5%", maxHeight: "450px"}}>
						<h1>Módulos activos</h1>
						<h1 style={{fontSize: 200, position: "relative", top: "10%", left: "50%", transform: "translate(-50%, -50%)"}}>5</h1>
					</div>
				</div>
				<div style={{ flex: 1 }}>
					<div style={{ flex: 1, background: "rgba(255,255,255, 0.23)", padding: "1%", marginBottom: "2%", borderRadius: "20px", width: "98%", height: "92%", alignItems: "center", justifyContent: "center" }}>
						<h1>Recomendaciones</h1>
						<RecommendationsCarousel />
					</div>
				</div>
				
			</div>
			<Chatbot/>
		</div>
	);
}

const StyledText = styled('text')(({ theme }) => ({
	fill: theme.palette.text.primary,
	textAnchor: 'middle',
	dominantBaseline: 'central',
	fontSize: 36,
	fontWeight: 900,
	fill: "white",
	slidesToScroll: 1,
	slidesToShow: 1,
}));

function PieCenterLabel({ children }) {
	const { width, height, left, top } = useDrawingArea();
	return (
		<StyledText x={left + width / 1.3} y={top + height / 2} >
			{children}
		</StyledText>
	);
}

const RecommendationsCarousel = () => {
	const recommendationsData = [
		{
			title: "Evite el sol",
			description: "Se recomienda evitar la exposición al sol durante todo el día debido a la extrema intensidad de los rayos UV.",
			icono: <TbSunOff style={{ width: "100%", height: "100%" }} />
		},
		{
			title: "Use gafas",
			description: "Se recomienda el uso de gafas",
			icono: <GiSunglasses style={{ width: "100%", height: "100%" }} />
		},
	];

	const settings = {
		dots: true,
		speed: 100,
		slidesToShow: 1,
		slidesToScroll: recommendationsData.length,
		variableWidth: false,
		centerMode: true,
	};

	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",height: "100%" }}>
			<Slider {...settings} style={{ width: "90%", alignSelf: "center", justifySelf: "center", height: "100%"}}>
				{recommendationsData.map((recommendation, index) => (
					<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",height: "100%",}}>
						<div key={index} style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							padding: "1%",
							borderRadius: "5px",
							
						}}>
							<div style={{ flex: "0 0 auto", marginRight: "2%", height: "100%", width: "20%"}}>
								{recommendation.icono}
							</div>
							<div style={{ flex: 1, paddingLeft: "10%", paddingRight: "10%"  }}>
								<h1 style={{ margin: 0, fontSize:32, fontWeight: 900, paddingBottom: 30 }}>{recommendation.title}</h1>
								<h2 style={{ margin: 0, fontSize:30, fontWeight: 400 }}>{recommendation.description}</h2>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>

	);

};



export default App;
