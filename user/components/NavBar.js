import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { PcDisplayHorizontal } from 'react-bootstrap-icons';

import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <Navbar className={styles.myNavBar} expand="lg">
            <Container>
                <Navbar.Brand href="/" as={Link}><PcDisplayHorizontal size={30} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={styles.navBarCollapse} id="basic-navbar-nav">
                    <Nav className={styles.linkContainer}>
                        <Nav.Link href="/" as={Link}>HOME</Nav.Link>
                        <Nav.Link href="/#about-me" as={Link}>ABOUT ME</Nav.Link>
                        <Nav.Link href="/#skills" as={Link}>SKILLS</Nav.Link>
                        <Nav.Link href="/#portfolio" as={Link}>PORTFOLIO</Nav.Link>
                        <Nav.Link href="/#blog" as={Link}>BLOG</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Nav.Link className={styles.contactBtn} href="https://github.com/haroon-ali-dev" target="_blank"><Github className="me-2" />GitHub</Nav.Link>
                        <Nav.Link className={styles.contactBtn} href="https://www.linkedin.com/in/haroon-ali-dev" target="_blank"><Linkedin className="me-2" />LinkedIn</Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}