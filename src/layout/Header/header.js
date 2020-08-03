  
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from "react-bootstrap";


import './header.css'

const Header = ({home ,search, detailBlog}) => {
    return(
        <Router>
            <>
            <div className="navbar">
                <Navbar expand="lg" variant="light" bg="light">
                    <div className="logo">
                        <Navbar.Brand href="#">
                            <Link to={'/'}><img src="https://impactbyte.com/static/brand/impactbyte_horizontal_color-trans.svg" className="navbar-brand" style={{height: "5.5rem"}} alt="Impact Byte"/></Link>
                        </Navbar.Brand>
                    </div>
                    <div className="search">
                            <Link to={"/searchJobs"}><i class="fas fa-search"></i>Search Jobs</Link>
                    </div>                       
                </Navbar>
            </div>
           
            </>
                
           
            <Switch>
                <Route exact path='/' component={home} />
                <Route path='/searchJobs' component={search} />
                <Route path='/blog/:titleBlog' component={detailBlog} />
            </Switch>
        </Router>
    );
}

export default Header;

