import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Importando o Link
import './Navbar.css';

// Função para carregar os dados dos institutos do JSON


function Navbar_result() {

  return (
    <div>
      <Navbar className="navv fixed-top " bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand className="nomesite fw-bold">Extras USP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="posicao-navbar ms-auto text-center d-flex justify-content-center align-items-center">
              <Nav.Link as={Link} to="/" className="text-secondary">Grupos</Nav.Link>
              <Nav.Link as={Link} to="/info" className="text-secondary">Sobre</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar_result;
