import "./navbar.scss"

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useContext } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
  const {darkMode, dispatch} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchIcon className="iconSearch"/>
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/> <span>English</span>
          </div>
          <div className="item">
           
            { darkMode? (<WbSunnyOutlinedIcon style={{color:"yellow"}} className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>) : 
              (<DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>)
            }
            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="countter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <div className="countter">3</div>
          </div>
          <div className="item">
              <ListAltOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img src="../../../img/IMG_0056.JPG" alt="" />
          </div>
          <div className="item">
            <SettingsOutlinedIcon className="icon"/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar