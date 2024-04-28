
import styles from './HeroStyle.module.css'
import { Button } from '../../../Components/Button/Button'
export const HeroCard = () => {
  return (
    <div className={styles.homeCard}>
        <h1 style={{fontSize : "45px", fontWeight: "bold", margin:"10px"}}>let us find your <div  style={{color : "#E11D48"}}>Foreever food</div></h1>
        <p style={{fontSize : "20px",  margin:"10px", color :"white"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <div className= {styles.buttons}>
            <div className={styles.button}>
            <Button backgroundColor = {"#E11D48"} color = {"#ffffff"} borderRadius = {0}  border = {"none"} >Search Now</Button>
            </div>
            <div className={styles.button}>
            <Button backgroundColor = {"#ffffff"} color = {"#E11D48"} borderRadius = {0}  border = {"none"} >Know More</Button>
            </div>
        </div>
    </div>
  )
}
