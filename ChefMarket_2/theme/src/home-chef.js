import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Category from './components/category';
import General from './components/general';
import Contact from './components/contact';
import { Parallax } from "react-parallax";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const insideStyles = {
  background: "#726d22",
  padding: 20,
  position: "absolute",
  top: "80%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: '100%',
  opacity: "0.7",
  filter: "alpha(opacity=60)"
};

const transbox={
  margin: "30px",
  backgroundColor: "#ffffff",
  opacity: "0.6",
  filter: "alpha(opacity=60)"
}

const image1="cm_assets/images/cm_hoja1.jpg";
const image2="cm_assets/images/cm_hoja2.jpg";
const image3="cm_assets/images/cm_hoja3.jpg";
const image4="cm_assets/images/cm_hoja4.jpg";
const image5="cm_assets/images/cm_hoja5.jpg";

class HomeChef extends React.Component {
  render() {
  	document.body.classList.remove('landing-page');
	  document.body.classList.remove('home-style');
  	document.body.classList.remove('three');
  	document.body.classList.remove('home-style-two');
  	return (
  		<div style={styles} id='home'>
  			{/* Navbar Component*/}
  			<Navbar />
        {/* footer con logo de chefmarket */}
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 600 }}>
            <div style={insideStyles}>
              <img src="cm_assets/images/logo_chef.png" alt="app" style={{height:"110px"}}/>
            </div>
          </div>
        </Parallax>        
        {/* <Parallax bgImage={image4} blur={{ min: -1, max: 3 }}> */}
        {/* componente Nosotros */}
        <Parallax bgImage={image4} strength={500}>       
          <div id="about"  className="d-flex justify-content-center div-nosotros" >
            <h2 className='nosotros'><span>NOSOTROS</span></h2>
          </div>     
          <div style={{ height: 700 }}>
            <About />
          </div>
        </Parallax>  
        {/* componente categorías */}
        <Parallax bgImage={image3} strength={400}>
          <div id="category" className="d-flex justify-content-center div-nosotros" >         
            <h2 className='nosotros'><span>CATEGORÍAS</span></h2>
          </div>
          <div style={{ height: 700 }}>
            <Category/>            
          </div>
        </Parallax>
        {/* componente información general */}
        <Parallax bgImage={image2} strength={200}>
          <div id="general" className="d-flex justify-content-center div-nosotros" >         
            <h2 className='nosotros'><span>INFORMACIÓN GENERAL</span></h2>
          </div>
          <div style={{ height: 600 }}>
            <General/>
          </div>
        </Parallax>
        {/* componnete contácto */}
        <Parallax bgImage={image5} strength={430}>
          <div id="contact" className="d-flex justify-content-center div-nosotros" >         
            <h2 className='nosotros' id='nosotros'><span>CONTÁCTANOS</span></h2>
          </div>
          <div style={{ height: 680 }}>
            <Contact />
          </div>
        </Parallax>
  		</div>
  	);
  }
}

export default HomeChef;
