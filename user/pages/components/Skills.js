import { motion } from "framer-motion"
import { Code } from 'react-bootstrap-icons';

import styles from './Skills.module.css';

export default function Skills() {
    return (
        <>
            <a name="skills"></a>
            <section className={styles.section}>
                <h3 className='text-center mb-5'>SKILLS</h3>
                <ul className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                        <li>
                            <Code className='mb-1' size={30} />
                            <h5>HTML</h5>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.25 }}
                    >
                        <li>
                            <Code className='mb-1' size={30} />
                            <h5>CSS</h5>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.50 }}
                    >
                        <li>
                            <Code className='mb-1' size={30} />
                            <h5>JavaScript</h5>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 0.75 }}
                    >
                        <li>
                            <Code className='mb-1' size={30} />
                            <h5>React.js</h5>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 1 }}
                    >
                        <li>
                            <Code className='mb-1' size={30} />
                            <h5>Next.js</h5>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 1.25 }}
                    >
                        <li>
                            <Code className='mb-1' size={30} />
                            <h5>Node.js</h5>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 1.50 }}
                    >
                        <li>
                            <Code className='mb-1' size={30} />
                            <h5>PostgreSQL</h5>
                        </li>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 0.5, delay: 1.75 }}
                    >
                        <li>
                            <Code className='mb-1' size={30} />
                            <h5>Automated Testing</h5>
                        </li>
                    </motion.div>
                </ul>
            </section>
        </>
    );
}