import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import './Header.css';
import { IconButton } from "@mui/material";



class Header extends React.Component{
    render(){

        return(

            
            <React.Fragment>
                <div className="header">
                    <IconButton>
                     <PersonIcon className="profile" fontSize="large"/>
                    </IconButton>
               
                <img src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg' alt="logo" className="tindericon"/>
                <IconButton>
                <MarkChatUnreadIcon className="message" fontSize="large" />
                    </IconButton>
                </div>
               
            </React.Fragment>
        );
    }
}
export default Header;