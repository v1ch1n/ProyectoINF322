import "./FeaturedInfo.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Avatar from '@mui/material/Avatar';
import { AvatarGroup } from "@mui/material";
import { pink } from '@mui/material/colors';
export default function FeaturedInfo() {
    return (
        <div className="featuredInfo">
            <div className="featuredDescription">
                <div className="featuredTitle">Agregar proyecto
                    <div className="featuredComment">
                   Crear un nuevo proyecto colaborativo, designa un equipo de trabajo 
                    </div>
                </div>
                <li className="buttonList">
                <AddCircleOutlineIcon  fontSize="large" sx={{ color: pink[500] }}>
                </AddCircleOutlineIcon>
                <div className="buttonDescription"> Crear proyecto</div>
                </li>
                
            </div>
            <div className="featuredProjects">
                <div className="featuredCardPrimary">
                    <img src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(3328).png" alt="icon" className="cardIcon"/>
                    <div className="featuredCardDescription">
                        <div>Miembros</div>
                        <AvatarGroup max={4} className="featuredDisplayMember">
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" className="cardColorPrimary"/>
                            
                        </AvatarGroup>
                        <div className="projectStatus">Estado del proyecto</div>
                        <div className="progressbar">
                            <div className="progressbarPrimary"></div>
                        </div>
                    </div>
                    
                </div>
                <div className="featuredCardSecondary">
                    <img src="https://images.squarespace-cdn.com/content/v1/542bd2a6e4b0852297eb5f88/1456192644917-BO2PZNF7A30SBI55KPPL/Chon2.jpg?format=1500w" alt="icon" className="cardIcon"/>
                    <div className="featuredCardDescription">
                        <div>Miembros</div>
                        <AvatarGroup max={4} className="featuredDisplayMember">
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />

                        </AvatarGroup>
                        <div className="projectStatus">Estado del proyecto</div>
                        <div className="progressbar">
                            <div className="progressbarSecondary"></div>
                        </div>
                    </div>
                    
                </div>

                <div className="featuredCardTernary">
                    <img src="https://yt3.ggpht.com/d0Obn2GZNDXqUc15SPYJDbomDic17Ysv2VlQOj2imo9WgCk8hy8M-6nHWsJ3YKLahTUk4FKlQDk=s900-c-k-c0x00ffffff-no-rj" alt="icon" className="cardIcon"/>
                    <div className="featuredCardDescription">
                        <div className="a">Miembros</div>
                        <AvatarGroup max={4} className="featuredDisplayMember">
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" />
                        </AvatarGroup>
                        <div className="projectStatus">Estado del proyecto</div>
                        <div className="progressbar">
                            <div className="progressbarTernary"></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>


    )
}
