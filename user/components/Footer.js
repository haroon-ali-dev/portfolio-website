import Link from 'next/link';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.section}>
            <p>GET IN TOUCH</p>
            <ul className={styles.iconList}>
                <li><Link href="https://github.com/haroon-ali-dev" target="_blank"><Github size={25} /></Link></li>
                <li><Link href="https://www.linkedin.com/in/haroon-ali-dev" target="_blank"><Linkedin size={25} /></Link></li>
            </ul>
        </footer>
    );
}