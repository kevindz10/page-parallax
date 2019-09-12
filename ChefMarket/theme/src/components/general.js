import React from 'react';


class General extends React.Component {
  render() {
		
  	return (
  		<section id="general" className="general">
         <div className="container">
            <div className="row "> 
            <div className='div-nosotros'>             
                  <h2 className='nosotros'><span>INFORMACIÓN GENERAL</span></h2>
               </div>
            <div className="col-md-8 col-lg-9 blog-sec">
            {/* <h2 className="title"><span>INFORMACIÓN GENERAL</span></h2> */}
               <h3>Reinventa la forma de cocinar </h3>
               <p className="caption-about">                           
                  crea nuevos platillos con lo que tenemos para ti
               </p>
            </div>

            <div className="col-md-4 col-lg-3 order-md-last list-sidebar">
                        <h2 className="title"><span>INFORMACIÓN GENERAL</span></h2>
                        <h3>Reinventa la forma de cocinar </h3>
                        <p className="caption-about">                           
                           crea nuevos platillos con lo que tenemos para ti
                        </p>
			    </div>{/* end columna */}
            </div>{/* end row */}
         </div>{/* end container */}
      </section>
  	);
  }
}


export default General;