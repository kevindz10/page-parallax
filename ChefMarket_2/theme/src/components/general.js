import React from 'react';
//objeto de configuración de estilos 
const transbox={
   backgroundColor: "#ffffff",
   opacity: "0.7",
   filter: "alpha(opacity=60)",
   width :'100%',
  //  fontSize: '4vw'
 }

class General extends React.Component {
  render() {

      return (
         <section  className="general">
            <div  className="container">
              <div className="row "> 
                {/* columna de información  */}
                <div className="col-md-3 col-lg-9">
                  <div className="align-center" style={transbox}> 
                    <br/>          
                    <h3 className='h3_info'>Reinventa la forma de cocinar </h3>
                    <p className="p_info">                           
                        Crea nuevos platillos con todo lo que tenemos para ti,
                    </p> 
                    <p className="p_info">                           
                        búscanos en: 
                    </p>                        
                  </div>
                </div>
                {/* columnas de imagenes almacenés anfora | grupo cristalero */}
                <div className='col-4 col-md-4'>
                  <img src="cm_assets/images/logo_anfora.png" alt="app" style={{width: 'auto',  maxHeight:'70%'}}/>
                </div>
                <div className='col-4 col-md-4'>
                  <img src="cm_assets/images/logo_grupo_cristalero.png" alt="app" style={{width: 'auto', maxHeight:'70%'}} />
                </div>

              </div>{/* end row */}
            </div>{/* end container */}
         </section>
      );
   }
}


export default General;