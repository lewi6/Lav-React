import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Footer from './components/pages/Footer/Footer'
import Products from './components/pages/Products/Products'
import SignUp from './components/pages/SignUp/SignUp'



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Services" component={Services} />
        <Route path="/Products" component={Products} />
        <Route path="/sign-up"   component={SignUp} />
      </Switch>
      <Footer />
    </Router> 
  );
}

export default App;
