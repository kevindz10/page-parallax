import React from 'react';


class Contact extends React.Component {
  render() {
		
  	return (

  		<section id="contact" className="contact">
         <div className="container"> 
            <div className="row">
               <div className='div-nosotros'>             
                  <h2 className='nosotros'><span>CONTÁCTANOS</span></h2>
               </div>
               
               <div className="col-md-8 offset-md-2">
                  <div className="footer-text">
                     {/* <img src="assets/images/email.png" alt="email" /> */}
                  
                     <p>  Si desea una cotizacion comuniquese con nosotros</p>
                     <p>  Ventas mayore:</p>
                     <p>  Teléfono: (55) 5920 2143</p>
                     <p>  e-mail: egomez1@chefmarket.com.mx</p>                     
                  </div>
               </div>
            </div>
         </div>
      </section>
  	);
  }
}

export default Contact;