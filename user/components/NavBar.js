import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from "./NavBar.module.css";

export default function NavBar() {
    return (
        <Navbar className={styles.navbar} bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">HAROON ALI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className={`${styles.linkContainer} me-auto ms-auto`}>
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#about-me">ABOUT ME</Nav.Link>
                        <Nav.Link href="#skills">SKILLS</Nav.Link>
                        <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                        <Nav.Link href="#blog">BLOG</Nav.Link>
                    </Nav>
                    <Nav.Link className={`${styles.contactBtn} ms-auto`} href="#contact">CONTACT ME</Nav.Link>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}