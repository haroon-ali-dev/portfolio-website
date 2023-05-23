import Link from 'next/link';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import moment from 'moment';

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.section}>
            <p style={{ fontWeight: "600" }}>GET IN TOUCH</p>
            <Link className={styles.email} href="mailto:haroon.ali.1104@gmail.com">haroon.ali.1104@gmail.com</Link>
            <ul className={styles.iconList}>
                <li><Link href="https://github.com/haroon-ali-dev" target="_blank"><Github size={25} /></Link></li>
                <li><Link href="https://www.linkedin.com/in/haroon-ali-dev" target="_blank"><Linkedin size={25} /></Link></li>
            </ul>
            <hr className={styles.divider} />
            <p className={styles.copyright}>&copy; {moment().year()} <span>Haroon Ali</span></p>
        </footer>
    );
}