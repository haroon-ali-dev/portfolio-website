import { motion } from "framer-motion"

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <p className={styles.heading}>HAROON ALI</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <p className={styles.subHeading}>FULL STACK DEVELOPER</p>
      </motion.div>


    </section>
  );
}