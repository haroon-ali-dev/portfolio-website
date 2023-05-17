import styles from './Skills.module.css';
import { Code } from 'react-bootstrap-icons';

export default function Skills() {
    return (
        <section className={styles.section}>
            <h3 className='text-center mb-5'>SKILLS</h3>
            <ul className={styles.grid}>
                <li>
                    <Code className='mb-1' size={50} />
                    <h5>HTML</h5>
                </li>
                <li>
                    <Code className='mb-1' size={50} />
                    <h5>CSS</h5>
                </li>
                <li>
                    <Code className='mb-1' size={50} />
                    <h5>JavaScript</h5>
                </li>
                <li>
                    <Code className='mb-1' size={50} />
                    <h5>React.js</h5>
                </li>
                <li>
                    <Code className='mb-1' size={50} />
                    <h5>Next.js</h5>
                </li>
                <li>
                    <Code className='mb-1' size={50} />
                    <h5>Node.js</h5>
                </li>
                <li>
                    <Code className='mb-1' size={50} />
                    <h5>PostgreSQL</h5>
                </li>
                <li>
                    <Code className='mb-1' size={50} />
                    <h5>Automated Testing</h5>
                </li>
            </ul>
        </section>
    );
}