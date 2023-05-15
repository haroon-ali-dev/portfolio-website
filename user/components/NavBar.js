import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <Navbar className={styles.myNavBar} bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">H.ALI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={styles.navBarCollapse} id="basic-navbar-nav">
                    <Nav className={styles.linkContainer}>
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#about-me">ABOUT ME</Nav.Link>
                        <Nav.Link href="#skills">SKILLS</Nav.Link>
                        <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                        <Nav.Link href="#blog">BLOG</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Nav.Link className={styles.contactBtn} href="#contact">GitHub</Nav.Link>
                        <Nav.Link className={styles.contactBtn} href="#contact">LinkedIn</Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}