import React from 'react';
import OwlCarousel from 'react-owl-carousel';
//objeto para los estilos del texto 
const transbox_carruser={
    backgroundColor: "#726d22",
    opacity: "0.7",
    filter: "alpha(opacity=60)",
    width :'100%',
    color: 'white'
  }

class Footer extends React.Component {
  
  render() {

   const options = {
      0:{items:2},
      767:{items:2},
      768:{items:3},
      992:{items:4},
      1200:{items:5}
  };

  	return (
      <div>
    		<section className="p-0">
           <div className="container-fluid">
           <div className="bottom-section">  
           {/* configuración del carrusel            */}
              <OwlCarousel
                      className="screenshot-carousel owl-carousel owl-theme"
                      loop={true}
                      margin={30}
                      items={5}
                      center={true}
                      dots={false}
                      autoplay={true}
                      autoplayTimeout={4000}
                      responsive={options}
              >
              {/* items para visualizar  */}
                <div className="screenshot-item">
                  <h3 style={transbox_carruser}>Thermos</h3>
                  <img  src="cm_assets/images/carrusel/cm_cat1.jpg" alt="app" />
                </div>
                <div className="screenshot-item">
                  <h3 style={transbox_carruser}>Cristaleria</h3>
                  <img  src="cm_assets/images/carrusel/cm_cat4.jpg" alt="app" />
                </div>
                <div className="screenshot-item">
                  <h3 style={transbox_carruser}>Muebles</h3>
                  <img   src="cm_assets/images/carrusel/cm_cat5.jpg" alt="app" />
                </div>
                <div className="screenshot-item">
                  <h3 style={transbox_carruser}>Baterias</h3>
                  <img  src="cm_assets/images/carrusel/cm_cat6.jpg" alt="app" />
                </div>
                <div className="screenshot-item">
                  <h3 style={transbox_carruser}>Escurridor</h3>
                  <img  src="cm_assets/images/carrusel/cm_cat2.jpg" alt="app" />
                </div>
                <div className="screenshot-item">
                  <h3 style={transbox_carruser}>Servicio</h3>
                  <img  src="cm_assets/images/carrusel/cm_cat7.jpg" alt="app" />
                </div>
              </OwlCarousel>              
           </div>
           </div>
        </section>
   </div>
  	);
  }
}
export default Footer;