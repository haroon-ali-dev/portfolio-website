import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
          <p className={styles.heading}>HAROON ALI</p>
          <p className={styles.subHeading}>FULL STACK DEVELOPER</p>
        </section>
    );
}