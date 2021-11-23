import "./Sidebar.css"
import {Chat,Home,CalendarToday,Help, Settings} from '@mui/icons-material';
import { pink } from '@mui/material/colors';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="section">
                    <Home sx={{ color: pink[500] }} fontSize="large"></Home>
                    </div>
                  
                    <div className="section">
                    <CalendarToday sx={{ color: pink[500] }} fontSize="large"></CalendarToday>
                    </div>
                    <div className="section">
                    <Chat sx={{ color: pink[500] }} fontSize="large"></Chat>
                    </div>
                    <div className="section">
                    <Help sx={{ color: pink[500] }} fontSize="large"></Help>
                    </div>
                    <div className="section">
                    <Settings sx={{ color: pink[500] }} fontSize="large"></Settings>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
