import { motion } from "framer-motion";
import Image from "next/image";

import styles from './Skills.module.css';

export default function Skills() {
    return (
        <>
            <a name="skills"></a>
            <section className={styles.section}>
                <h3 className='text-center mb-5'>SKILLS</h3>
                <ul className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                        <li>
                            <i className={`devicon-html5-plain-wordmark ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
                    >
                        <li>
                            <i className={`devicon-css3-plain-wordmark ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.50 }}
                    >
                        <li>
                            <i className={`devicon-javascript-plain ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.75 }}
                    >
                        <li>
                            <i className={`devicon-bootstrap-plain-wordmark ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
                    >
                        <li>
                            <i className={`devicon-react-original-wordmark ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 1.25 }}
                    >
                        <li>
                            <i className={`devicon-nextjs-original-wordmark ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 1.50 }}
                    >
                        <li>
                            <Image
                                src="https://res.cloudinary.com/dembzfkgg/image/upload/v1694103644/icons/react-native_joiz2b.svg"
                                width="80"
                                height="80"
                                alt="React Native logo"
                            />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 1.75 }}
                    >
                        <li>
                            <i className={`devicon-nodejs-plain-wordmark ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 2 }}
                    >
                        <li>
                            <i className={`devicon-postgresql-plain-wordmark ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 2.25 }}
                    >
                        <li>
                            <i className={`devicon-mongodb-plain-wordmark ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 2.50 }}
                    >
                        <li>
                            <i className={`devicon-jest-plain ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 2.75 }}
                    >
                        <li>
                            <i className={`devicon-amazonwebservices-plain-wordmark ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 3 }}
                    >
                        <li>
                            <i className={`devicon-googlecloud-plain-wordmark ${styles.skillIcon}`} />
                        </li>
                    </motion.div>
                </ul>
            </section>
        </>
    );
}