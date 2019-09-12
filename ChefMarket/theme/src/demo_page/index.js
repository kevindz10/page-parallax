import React from 'react';
import Navbar from './../components/navbar';
import About from './../components/about';
import Category from './../components/category';
import General from './../components/general';
import Contact from './../components/contact';

class App extends React.Component {
  render() {  	

  	var x = document.getElementById("theme");
  	x.style.display = "none";

  	return (
  		<div>
				<Navbar />

  		{/*home section*/}
  		<section id='home' className="home">	      
	      {/* <div className="container-fluid">
	      </div> */}
				<div className="container">

				</div>			
				
	    </section>

			{/* <footer className="page-footer font-small indigo">
					<div className="container-fluid text-center text-md-left">					
						<div className="row">
							<div className="col-md-6 mt-md-0 mt-3">
								<h5 className="text-uppercase">Footer Content</h5>
								<p>Here you can use rows and columns here to organize your footer content.</p>
							</div>
						</div>	
					</div>
			</footer> */}
			{/* home nosotros  */}
			<About />

	    {/*home category*/}
			<Category/>

	    {/*home general*/}
			<General/>

			{/*Contact Component*/}
			<Contact />

	   </div>
  	);
  }
}

export default App;