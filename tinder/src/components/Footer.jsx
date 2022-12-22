import React from "react";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from "@mui/material";
import './Footer.css'


class Footer extends React.Component{
    render(){
        return (
           
                
         <div className="footer">
                <IconButton className="replay">
                    <ReplayIcon fontSize="large"/>
               </IconButton>
               <IconButton className="close">
                    <CloseIcon fontSize="large"/>
               </IconButton>
               <IconButton className="starrate">
                    <StarRateIcon fontSize="large"/>
               </IconButton>
               <IconButton className="favorite">
                    <FavoriteIcon fontSize="large"/>
               </IconButton>
        </div>
               
                
               
            
        );
    }
}
export default Footer;