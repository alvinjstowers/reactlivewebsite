import React, { Component } from 'react';
import home_banner from '../src/banner123.png';
import home_icon1 from '../src/icon1.png';
import home_icon2 from '../src/icon2.png';
import home_icon3 from '../src/icon3.png';
import home_eco_banner from '../src/eco-bne.png';
import home_icon_1 from '../src/icon.1.png';
import home_icon_2 from '../src/icon.2.png';
import home_icon_3 from '../src/icon.3.png';
import home_icon_4 from '../src/icon.4.png';
import home_icon_5 from '../src/icon.5.png';
import home_brain from '../src/brain_bk.svg';
import home_beg from '../src/beg123.png';
import home_beg2 from '../src/6-3.png';
import home_greenright from '../src/greenright.jpg';
import home_brain_video from '../src/brain_vedio.png';




export default class HomeA extends Component {
  render() {
    return (
      <>
      <div className="Woola_banner">
              <img src={home_banner} />
          <div className="container">
              <div className="row">
                <div className="col-md-5"> </div>
                  <div className="col-md-7">
                    <p className="style_round"> 
                         Your 1st Choice for
                   </p>
                   <h2>natural products</h2>
                    <p>
                      We found an increasing desire for products made from natural products that were sustainably sourced.
                    </p>
                     <a href="#">Find Store Near You</a>
                  </div>
              </div>
          </div>
    </div>
   
    <HomeB />
    </>
    );
  }
}

class HomeB extends React.Component{
  render() {
    return (
     <>
        <div className="icon_sec">
          <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <img src={home_icon1} />
                  <h2>Natural Materials </h2>
                  <p>Products made with natural materials</p>
               </div>
              <div className="col-md-4">
                <img src={home_icon2} />
                <h2>Completely Sustainable </h2>
                <p>All natural materials must be sustainably sourced.</p>
              </div>
              <div className="col-md-4">
                  <img src={home_icon3} />
                   <h2>Totally New Zealand</h2>
                   <p>All products are hand crafted in New Zealand by New Zealanders</p>
              </div>
           </div>
        </div>
      </div>

      <HomeC />
      </>
    );
  }
}

class HomeC extends React.Component{
  render() {
    return (
      <>
        <div className="eco-friend">
            <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <p className="style_round">About Us</p>
                      <h2>
                           Woola Eco-friendly Pillows Mattresses
                      </h2>
                      <p>
                           Here in New Zealand, we are striving to keep our country green, sustainable, and beautiful. We found an increasing desire for products made from natural products that were sustainably sourced. From this Woola was born. Starting with pillows the range quickly grew to include mattresses, bases, duvets, and overlays. We export this range right across the globe.
                      </p>
                      <a href="#">Learn More</a>
                  </div>
                  <div className="col-md-6">
                      <img src={home_eco_banner} />  </div>
                  </div>
              </div>
          </div>

      <HomeD />
      </>
    );
  }
}

class HomeD extends React.Component{
  render() {
    return (
      <>
      
      <section className="wow slideInLeft pillow_product"> 
  <div className="container">
  <div className="row">
    <div className="col-md-4">
       <p className="style_round">Products</p>
       <h2>
Natural woola Products
      </h2>
    </div>
     <div className="col-md-4">
      <div className="products_in">
        <img src={home_icon_1} />
        <h3>Purewool Pillow</h3>
    </div>
  </div>
      <div className="col-md-4">
      <div className="products_in">
        <img src={home_icon_2} />
        <h3>Duvet Inner</h3>
    </div>
  </div>
   <div className="col-md-4">
      <div className="products_in">
        <img src={home_icon_3} />
        <h3>W1000 Mattress</h3>
    </div>
  </div>
   <div className="col-md-4">
      <div className="products_in">
        <img src={home_icon_4} />
        <h3>Foundation</h3>
    </div>
  </div>
   <div className="col-md-4">
      <div className="products_in">
        <img src={home_icon_5} />
        <h3>Headboards</h3>
    </div>
  </div>
  <div className="col-md-12 text-center">
   <a href="#">View All Products</a>
 </div>
</div>
</div>

</section>
      
<HomeE />
      </>
    );
  }
}

class HomeE extends React.Component{
  render() {
    return (
      <>
           <section className="wow slideInLeft Brain_custom"> 
                 <img src={home_brain} />
                   <div className="container">
                         <div className="row">
                             <div className="col-md-8">
                                 <h2>
                                      The brains behind the beds
                                  </h2>
                                <div className="brain-ved">
                                    <img src={home_brain_video} /> 
                                </div>
                           </div>
                        </div>
                     </div>
             </section>
      
         <HomeF />
       </>
    );
  }
}

class HomeF extends React.Component{
  render() {
    return (
      <>
          <section className="wow slideInLeft Mattress_custom"> 
  <div className="container">
  <div className="row">
    <div className="col-md-6 text-center">
<img src={home_beg} />
    </div>
      <div className="col-md-6 align-self-center">
        <div className="mattress_in">
<h2>W1000 Mattress</h2>
<p>W1000 Mattress is the perfect balance of natural materials and all night support. Featuring certified organic latex, 100% NZ wool comfort layers and a pocket spring core this is a mattress will suit almost everyone. Available in 2 different feels.
  </p>
  <a href="#">Learn More</a>
</div>
    </div>



    <div className="col-md-6 align-self-center">
      <div className="mattress_in  ">
<h2>W1000 Mattress</h2>
<p>W1000 Mattress is the perfect balance of natural materials and all night support. Featuring certified organic latex, 100% NZ wool comfort layers and a pocket spring core this is a mattress will suit almost everyone. Available in 2 different feels.
  </p>
  <a href="#">Learn More</a>
</div>
    </div>
      <div className="col-md-6 text-center">
        <img src={home_beg2} />

    </div>
  </div>
</div></section>


       <HomeG />
       </>
    );
  }
}


class HomeG extends React.Component{
  render() {
    return (
      <>
<section className="wow slideInLeft Distributor">
   <div className="container">
  <div className="row">
    <div className="col-md-12 text-center">
      <h2>Become A Distributor</h2>
      <p>Woola products are exported to dealers right across the globe. Hand made beds and bedding, made right here in New Zealand. Contact us to join the environmentally responsible movement.</p>
      <a href="#">Contact Us</a>
      </div>
      </div>
      </div>
</section>

         <HomeH />
       </>
    );
  }
}

class HomeH extends React.Component{
  render() {
    return (
      <>
      <section data-wow-duration="2s" data-wow-delay="5s" class="wow slideInLeft prices-of-wales">
        <div className="row">
            <div className="col-md-6 wales1">
              <div className="wale1_in">
                <h2>The Campaign for Wool | Patron: HRH The Prince of Wales</h2>
                <a href="#">Find Out More</a>
              </div>
            </div>
            <div className="col-md-6 wales2">
              <img src={home_greenright}/>
            </div>
        </div>
    </section>
    <HomeI />

       </>
    );
  }
}
class HomeI extends React.Component{
  render() {
    return (
      <>
     <section class="bio-sec">
	<div className="container">
		<div className="row">
					<div className="col-md-4 aos-init aos-animate" data-aos="zoom-in">
				<div className="w-100">
					<img src="https://www.woola.co.nz/wp-content/uploads/2021/05/c3.png"/>
					<h3>Biodegradable Packaging</h3>
				</div>
			</div>
						<div className="col-md-4 aos-init aos-animate" data-aos="zoom-in">
				<div className="w-100">
					<img src="https://www.woola.co.nz/wp-content/uploads/2021/05/c2.png"/>
					<h3>Natural Materials</h3>
				</div>
			</div>
						<div className="col-md-4 aos-init aos-animate" data-aos="zoom-in">
				<div className="w-100">
					<img src="https://www.woola.co.nz/wp-content/uploads/2021/05/c1.png"/>
					<h3>Handmade in New Zealand</h3>
				</div>
			</div>
					</div>
	</div>
</section>


       </>
    );
  }
}