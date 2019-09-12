import React from 'react';
import Footer from './footer';
class Category extends React.Component {
  render() {

		
  	return (
  		<section id="category" className="category">
         <div className="container">
            <div className="row "> 
                <div className='div-nosotros'>             
                    <h2 className='nosotros'><span>CATEGORÍAS</span></h2>
                </div>
            <div className="col-md-8 col-lg-9 blog-sec">
            </div>

               <div className="col-md-4 col-lg-3 order-md-last list-sidebar">
                    <div className="sidebar">
                        <div className="sidebar-space">
                            {/* <h4 className="blog-title">Categorías</h4> */}
                            <div className="blog-divider"></div>
                            <div className="blog-cat-detail">
                                <ul className='ul-category'>
                                    <li className="marg-15">
                                        <a href="blog-details">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i> Acero inoxidable
                                        </a>
                                    </li>
                                    <li className="marg-15">
                                        <a href="blog-details">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i> Utensilios de cocina
                                        </a>
                                    </li>
                                    <li className="marg-15">
                                        <a href="blog-details">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i> Hierro fundido
                                        </a>
                                    </li>
                                    <li className="marg-15">
                                        <a href="blog-details">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i> Servicio de Bar
                                        </a>
                                    </li>
                                    <li className="marg-15">
                                        <a href="blog-details">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i> Cubiertos
                                        </a>
                                    </li>
                                    <li className="marg-15">
                                        <a href="blog-details">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i> Cristalería
                                        </a>
                                    </li>
                                    <li className="marg-15">
                                        <a href="blog-details">
                                            <i className="fa fa-angle-right" aria-hidden="true"></i> Peltre
                                        </a>
                                    </li>
                                    <button className='button-category'> descarga aqui nuestro catálogo</button>
                                </ul>
                            </div>
                        </div>                        
                    </div>
			          </div>{/* end columna */}
            </div>{/* end row */}

            {/*Footer Component*/}
			<Footer />
         </div>{/* end container */}
      </section>
  	);
  }
}


export default Category;