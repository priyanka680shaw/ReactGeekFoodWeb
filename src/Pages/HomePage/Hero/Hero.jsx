
import styles from './HeroStyle.module.css'
import { HeroCard } from './HeroCard'
export const Hero = () => {
  return (
    <section>
      <div className={styles.maincomtainer}>
        <div className={styles.card}>
          <HeroCard />
        </div>
      </div>
    </section>

  )
}
