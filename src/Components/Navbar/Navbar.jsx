import React from 'react'
import logo from "../../assets/logo.svg"
import NavbarStyle from "./NavbarStyle.module.css"
import { Button } from '../Button/Button'
export const Navbar = () => {
  return (
      <>
        <nav>
          <div className={NavbarStyle.outerContainer}>
            <div className={NavbarStyle.innerContainer}>
              <div className={NavbarStyle.logo}>
                <figure>
                  <img src= {logo} />
                </figure>
                <div className={NavbarStyle.webSiteName}>
                  <h2>Geeks food</h2>
                </div>
              </div>
              <div className={NavbarStyle.list}>
                <ul>
                   <li>Home</li>
                   <li>Quote</li>
                   <li>Resturents</li>
                   <li>Foods</li>
                   <li>Contacts</li>
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
