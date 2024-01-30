import React, { useState } from "react";
import "./SideNavBar.css";



const SideNavBar = () => {
  const [isExpanded, setExpandState] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { text: "Dashboard", icon: "icons/pie-chart.svg", url: "/dashboard" },
    { text: "Módulos", icon: "icons/folder.svg", url: "/modulos" },
    { text: "Históricos", icon: "icons/calendario.svg", url: "/historicos" },
    { text: "Rest API", icon: "icons/api.svg", url: "/api" },
    { text: "Solicitudes", icon: "icons/user.svg", url: "/solicitudes" },
  ];

  
  const comprobarRuta = (url)=>{
	const ruta = window.location.pathname;
	if(url === ruta){
		return "#124e96";
	}else{
		return false;
	}
  }

  return (
    <div className={isExpanded ? "side-nav-container" : "side-nav-container side-nav-container-NX"}>
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src="logo2.svg" style={{ width: "75px", height: "100px" }} alt="" />
              <h3>Radiación UV</h3>
            </div>
          )}
          <button
            className={isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"}
            onClick={() => setExpandState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon, url }) => (
            <a style={{background: comprobarRuta(url)}}
              key={url}
              className={`${isExpanded ? "menu-item" : "menu-item menu-item-NX"} ${
                activeSection === url ? "active-section" : ""
              }`}
              href={url}
            >
              <img className="menu-item-icon" src={icon} alt="" srcSet="" />
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img className="nav-footer-avatar" src="icons/admin-avatar.svg" alt="" srcSet="" />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">Patricio</p>
              <p className="nav-footer-user-position">Admin</p>
            </div>
          </div>
        )}
        <img className="logout-icon" src="icons/logout.svg" alt="" srcSet="" />
      </div>
    </div>
  );
};

export default SideNavBar;
