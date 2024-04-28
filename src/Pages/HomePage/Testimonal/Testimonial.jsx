
import styles from './TestimonialStyle.module.css'
import img from '../About/sideImg.avif'
export const Testimonial = (props) => {
  const {userFeedback , userName ,  userPosotion , } = props
 
  return (
   <>
      <div className={styles.mainContainer}>
          <div className={styles.text}>
            <p>{userFeedback}</p>
          </div>
          <div className={styles.userinfo}>
            <div className= {styles.image}>
               <figure>
                  <img src={img} style={{width :"50px", height : "50px" , borderRadius : "50px"}}/>
               </figure>
            </div>
            <div className={styles.userName}>
                  <h3>{userName}</h3>
                  <p>{userPosotion}</p>
            </div>
          </div>
      </div>
   </>
  )
}
