
import styles from "./AboutStyle.module.css"
import image from './sideImg.avif'
import { Button } from "../../../Components/Button/Button"

export const About = () => {
    return (
        <>
            <section>
                <div className={styles.mainContainer}>
                    <div className={styles.innerContainer}>
                        <div className={styles.leftOuterContainer}>
                            <figure>
                                <img src={image}/>
                            </figure>
                            {/* <div className={styles.leftInnerContainer}></div> */}
                        </div>
                        <div className={styles.rightOuterContainer}>
                            <div className={styles.rightInnerContainer}>
                                <h1 style={{fontSize : "35px", fontWeight: "bold", margin:"10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                                <p style={{fontSize : "18px",  margin:"15px ", color :"greay"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.

Get in Touch</p>
<Button className = {styles.btnHover} backgroundColor = {"#1D4ED8"} color = {"#ffffff"} borderRadius = {6}  border = {"none"} >Get in Touch</Button>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
}
