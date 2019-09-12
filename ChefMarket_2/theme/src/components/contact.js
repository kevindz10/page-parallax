import React from 'react';

const transbox={
   margin: "30px",
   backgroundColor: "#ffffff",
   opacity: "0.5",
   filter: "alpha(opacity=60)",
   width :'100%'
 }
const transbox_footer={
   margin: 'auto',
   backgroundColor: "#ffffff",
   // backgroundColor: "#fefcdd",
   opacity: "0.6",
   filter: "alpha(opacity=70)",
   marginBottom: '5%'
 }
 
 const transbox_p={
   margin: "5%",
   fontWeight: "bold",
   color: "#000000",
 }

class Contact extends React.Component {
  render() {
		
  	return (

  		<section className="contact">
         <div className="container"> 
            <div className="row">               
           
               <div className="align-center" style={transbox}>
                  <div >
                     <div>            
                     <i className="fa fa-envelope-o fa-4x"></i> 
                        <p  id='about-us'  style={transbox_p}>
                              Si desea una cotización comuniquese con nosotros
                        </p>
                        <p  id='about-us'  style={transbox_p}>
                              Ventas mayoreo:
                        </p>
                        <p  id='about-us'  style={transbox_p}>
                              Teléfono: (55) 5920 2143
                        </p>
                        <p  id='about-us'  style={transbox_p}>
                              e-mail: egomez1@chefmarket.com.mx
                        </p>

                     </div>
                  </div>                  
               </div>

            </div>
         </div>
      </section>
  	);
  }
}

export default Contact;