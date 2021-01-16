import React from 'react'
import '../style/NavBar.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function NavBar(){
    return(
        <Toolbar>
            <h2>Marketeer</h2>
            <Button>Log In</Button>
            <Button>Sign Up</Button>
        </Toolbar>
    );
}

export default NavBar;