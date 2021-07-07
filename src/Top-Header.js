import React, { Component } from 'react';

 export default class TopHeader extends Component {
  render() {
    return (
        <section data-wow-duration="2s" data-wow-delay="5s" class="wow slideInLeft top_bar">
             <div class="container">
                 <div class="row">
                    <div class="col-md-3">
                        <a href="tel: +64 9 439 2243"><i class="fa fa-phone " ></i> +64 9 439 2243</a>
                    </div>
                    <div class="col-md-6 text-center">
                        <a href="#"><i class="fa fa-map-marker" aria-hidden="true"></i> Freyberg Road, Ruawai, Northland, New Zealand</a>
                    </div>
                    <div class="col-md-3 text-right">
                       <select name="cars" id="cars">
                            <option value="volvo">English</option>
                             <option value="saab">hindi</option>
                            <option value="mercedes">chinese</option>
                            <option value="audi">urdu</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}