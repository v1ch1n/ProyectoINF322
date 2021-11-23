import React from 'react';
import "./Topbar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    {/* <span className="logo">Logo</span> */}
                </div>
                <div className="topCenter">
                    <div className="options">Dashboard</div>
                    <div className="options">Proyectos</div>
                    <div className="options">Miembros</div>
                    <div className="options">Estadísticas</div>
                    <div className="options">Ayuda</div>
                </div>
                <div className="topRight">
                    <div className="username">Irina Zheng
                        <div className="usernameTag">Scrum Master
                        </div>
                    </div> 

                    <img src="https://www.occ.com.mx/blog/wp-content/uploads/2021/01/Que-hace-un-project-manager-OCCMundial.jpg" alt="profile pic" className="topAvatar" />
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                    
                
                </div>
                
        
            </div>
        </div>
    )
}
