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
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#link">ABOUT ME</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}