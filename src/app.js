import React, { Component } from 'react';
import TopHeader from './Top-Header'
import Header from './Header'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import Home from './Home'
import Footer from './Footer'
import{
   BrowserRouter as Router,
   Route,
   Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
          
          <TopHeader />
          <Header />
           <Route exact path="/" component={Home} />
           <Route path="/about_us" component={About} />
           <Route path="/product" component={Product} />
           <Route path="/contact_us" component={Contact} />

           <Footer />

          
          </Router>
    );
  }
}

export default App;