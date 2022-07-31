import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import { useState } from 'react';
import { FaLinkedin, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import BurgerMenu from './BurgerMenu';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    className: trigger ? "appBar--2" : "appBar",
  });
}
    

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function openToggle(e) {
    if (isMenuOpen==false) {
      return setMenuOpen(true)
    }
  }

  const close = function closeToggle(e) {
    if (e.target.getAttribute("class"==="menu__full")) {
      return setMenuOpen(false)
    }
  }
  
  function openInsta(){
    window.open("https://www.instagram.com/faradji_yasser/?hl=en");
  }
  function openFacebook(){
      window.open("https://www.facebook.com/salgado.925/");
  }
  function openLinkedIn(){
      window.open("https://dz.linkedin.com/in/yasser-faradji");
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
      <AppBar>
          <Toolbar className='appBar__nav align'>
            <Typography variant="h6" component="div">
                <Link className='appBar__nav__navlogo appBar__nav__navlink' to={"/"}>F.YASSER</Link>    
            </Typography>
       
            <Typography variant="p" component="div" className="align">
                <Link className='appBar__nav__navlink icons nodisplay' to={"/"}>
                    HAVE AN ISSUE?
                </Link>
                <Link className='appBar__nav__navlink appBar__nav__icons' to={"/"} onClick={openInsta}>
                    <FaFacebookSquare size={15} />
                </Link>
                <Link className='appBar__nav__navlink appBar__nav__icons' to={"/"} onClick={openFacebook}>
                    <FaInstagram size={15} />
                </Link>    
                <Link className='appBar__nav__navlink appBar__nav__icons' to={"/"} onClick={openLinkedIn}>
                    <FaLinkedin size={15} />
                </Link>
                  <div className='appBar__nav__navlink' onClick={()=>openToggle()}> 
                      <BurgerMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/>
                  </div>          
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => ``,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}
