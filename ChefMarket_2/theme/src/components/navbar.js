import React from 'react';
// Objeto para configurar los estilos del logo
 const transbox_logo={
	fontWeight: "bold",
	color: "#000000",
	opacity: "1",
	filter: "alpha(opacity=100)",
	height:'95%'
 }

class Navbar extends React.Component {
  render() {
  	return (
  		<nav className="navbar navbar-expand-lg navbar-light theme-nav fixed-top darkHeader navbar-dark" >
		   <div id="navbar-main" className="container">
			  <div style={transbox_logo}><a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img src="cm_assets/images/logo_cm.png" className='navbar-img' alt="logo" /></a></div>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		         <span className="navbar-toggler-icon"></span>
		      </button>
		      <div className="collapse navbar-collapse default-nav" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto" id="mymenu">
						<li className="nav-item">
							<a className="nav-link" href="#home">HOME</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#about">NOSOTROS</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#category">CATEGORÍAS</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#general">INFORMACIÓN GENERAL</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">CONTÁCTANOS</a>
						</li>
					</ul>
				</div>
		   </div>
		</nav>
  	);
  }
}

export default Navbar;
