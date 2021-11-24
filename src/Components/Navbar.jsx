import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import css from './Navbar.module.css'
export class Navbar extends Component {
    render() {
        return (
            <div>
            
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div class="container-fluid">
                            
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                
                                <NavLink className = {(a)=> a.isActive? css.active : css.navlink} to = "/">Home</NavLink>
                                <NavLink className = {(navData)=> navData.isActive? css.active : css.navlink}  to = "/contact">Contact</NavLink>
                                <NavLink className = {(navData)=> navData.isActive? css.active : css.navlink} to = "/Address">Address</NavLink>
                                <NavLink className = {(navData)=> navData.isActive? css.active : css.navlink} to = "/about">About</NavLink>
                                
                                
                            </ul>
                            </div>
                        </div>
</nav>
            </div>
        )
    }
}

export default Navbar
