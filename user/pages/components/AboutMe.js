import { motion } from "framer-motion"

import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <>
            <a name="about-me"></a>
            <section className={styles.section}>
                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                >
                    <div className={styles.card}>
                        <h2 className={'text-center mb-4'}>ABOUT ME</h2>
                        <p>Welcome to my portfolio! I'm a dedicated full-stack JavaScript developer with a strong passion for coding and innovation. My projects reflect my problem-solving skills, creativity, and attention to detail. I'm excited about my next tech career adventure and the opportunity to contribute my expertise to your team!</p>
                    </div>
                </motion.div>
            </section>
        </>
    );
}