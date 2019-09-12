import React from 'react';
import OwlCarousel from 'react-owl-carousel';
// import Footer from './footer';

class Footer extends React.Component {
  
  componentWillMount() {
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

  render() {

   const options = {
      0:{
          items:2, 
      },
      767:{
          items:2,
      },
      768:{
          items:3,
      },
      992:{
          items:4,
      },
      1200:{
          items:5
      }
  };

  	return (
      <div>
    		<section className="p-0">
           <div className="container-fluid">
           <div className="bottom-section">
            
               <OwlCarousel
                        className="screenshot-carousel owl-carousel owl-theme"
                        loop={true}
                        margin={30}
                        items={5}
                        center={true}
                        dots={false}
                        autoplay={true}
                        autoplayTimeout={8000}
                        responsive={options}
                     >
                           <div className="screenshot-item"><img src="assets/images/app/carrucel/1.jpg" alt="app" /></div>
                           <div className="screenshot-item"><img src="assets/images/app/carrucel/2.jpg" alt="app" /></div>
                           <div className="screenshot-item"><img src="assets/images/app/carrucel/3.jpg" alt="app" /></div>
                           <div className="screenshot-item"><img src="assets/images/app/carrucel/4.jpg" alt="app" /></div>
                           <div className="screenshot-item"><img src="assets/images/app/carrucel/5.jpg" alt="app" /></div>
                           <div className="screenshot-item"><img src="assets/images/app/carrucel/6.jpg" alt="app" /></div>
                           <div className="screenshot-item"><img src="assets/images/app/carrucel/7.jpg" alt="app" /></div>
                        </OwlCarousel>
              
           </div>
           </div>
        </section>

        {/* <div className="tap-top">
           <div>
              <i className="fa fa-angle-double-up"></i>
           </div>
        </div>
        <div id="fb-root"></div> */}
        {/*Your customer chat code*/}
          {/* <div className="fb-customerchat"
              page_id="2123438804574660"
              theme_color="#18e7d3"
              logged_in_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?"
              logged_out_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?">
          </div> */}
   </div>
  	);
  }
}


export default Footer;