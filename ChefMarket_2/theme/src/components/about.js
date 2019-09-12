import React from 'react';
//objeto para los estilos del div contenedor
const transbox={
  margin: "auto",
  backgroundColor: "#ffffff",
  opacity: "0.6",
  filter: "alpha(opacity=60)"
}
//objeto para los estilos de la la fuente 
const transbox_p={
  margin: "5%",
  fontWeight: "bold",
  color: "#000000",
}

class About extends React.Component {
  render() {
  	return (
  		<section >
        <div className="container">
          <div className="row ">
            <div className="align-center" style={transbox}>
              <p className="caption-about" id='about-us' style={transbox_p}>
                  Somos una empresa dedicada a la venta al por mayor
                  de instrumentos y accesorios de cocina.
              </p>
              <h3 className='h3_about'  style={transbox_p}>Nuestra visión</h3>
              <p  id='about-us'  style={transbox_p}>
                  Es alcanzar el liderazgo en comercialización de nuestros productos en la región,
                  brindando los mejores precios y los productos mas funcionales y novedosos del mercado
              </p>
              <h3 className='h3_about'  style={transbox_p}>Nuestros productos</h3>
              <p  id='about-us'  style={transbox_p}>
                  Están  seleccionados para satisfacer las necesidades de  las familias mexicanas,
                  brindando lo necesario para  preparar  lo mejor de la gastronomía nacional e internacional
                  dentro del hogar o negocio.
              </p>
            </div>
          </div>
        </div>
      </section>
  	);
  }
}
export default About;
