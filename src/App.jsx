import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
//we have installed npm install boostrap jquery to run above bundle.

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import {Switch,Route, Redirect} from "react-router-dom";
import Footer from './Footer';

const App = () => {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/service" component={Service} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/"/>
         </Switch>
         <Footer />
        </>
    );
};

export default App;