import React from 'react';
import Footer from './footer';

class Category extends React.Component {
  render() {		
  	return (
  		<section  className="category">
        <div className="container">
          <div className="row "> 
            <div className="col-md-8 col-lg-9 blog-sec">            
            </div>            
          </div>{/* end row */}

          {/*Footer Component*/}
          <Footer />
        </div>{/* end container */}
      </section>
  	);
  }
}

export default Category;