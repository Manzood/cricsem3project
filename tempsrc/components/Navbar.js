import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from "@material-ui/icons/Home"
import RefreshIcon from '@material-ui/icons/Refresh';
import React from "react";

const Navbar=()=>
{
    return(
        
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <IconButton>
                    <HomeIcon/>
                </IconButton>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <Typography>Live score</Typography>
            
            </Toolbar>
        </AppBar>

    );
};

export default Navbar;