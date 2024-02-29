import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {
    return (
        <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">ToDo App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">Oladele Rasheed</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default TextLinkExample;