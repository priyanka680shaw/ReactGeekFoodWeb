import React from 'react'
import logo from "../../assets/logo.svg"
import NavbarStyle from "./NavbarStyle.module.css"
import { Button } from '../Button/Button'
import { NavLink } from 'react-router-dom'
import { Home } from '../../Pages/HomePage/Home/Home'
export const Navbar = () => {
  return (
      <>
        <nav className={NavbarStyle.navbar}>
          <div className={NavbarStyle.outerContainer}>
            <div className={NavbarStyle.innerContainer}>
              <div className={NavbarStyle.logo}>
                <NavLink to="/">
                <figure>
                  <img src= {logo} />
                </figure>
                </NavLink>
                <div className={NavbarStyle.webSiteName}>
                  <h2 style={{fontSize:"20px" , fontWeight :"bolder"}}>Geeks food</h2>
                </div>
              </div>
              <div className={NavbarStyle.list}>
                <ul>
                <NavLink to="/"><li className={NavbarStyle.li}>Home</li></NavLink>
                  <NavLink to="quote"><li>Quote</li></NavLink>
                  <NavLink to= "resturents" > <li>Resturents</li></NavLink>
                  <NavLink to= "foods" > <li>Foods</li></NavLink>
                  <NavLink to= "contact" ><li>Contacts</li></NavLink>
                   
                  
                  
                   
                </ul>
              </div>
              <div className ={NavbarStyle.navButton}>
                <Button backgroundColor = {"#1D4ED8"} color = {"#ffffff"} borderRadius = {12}  border = {"none"} >Get Started</Button>
              </div>
            </div>
          </div>
        </nav>
      </>
  )
}
