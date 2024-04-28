import logoImg from './footerlogo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import styles from './FooterStyle.module.css'
function Footer() {
    return (
        <>
            <footer>
                <div className={styles.mainContainer}>
                    <div className={styles.innerContainer}>
                        <div className="logoScetion">
                            <figure>
                                <img src= {logoImg} style={{width : "250px"}}/>
                            </figure>
                        </div>
                        <div className="para">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
                            Incidunt consequuntur amet culpa cum itaque neque.</p>
                        </div>
                        <div >
                            <ul className={styles.menu}>
                                <li>About</li>
                                <li>Carears</li>
                                <li>History</li>
                                <li>Services</li>
                                <li>Projects</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="socialMedia">
                            <ul className={styles.menu}>
                                <li><FaFacebook/></li>
                                <li><FaInstagram/></li>
                                <li><FaTwitter/></li>
                                <li><FaGithub/></li>
                                <li><TbWorld/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;