import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Importando o Link
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import Home from '../pages/Home';

// Função para carregar os dados dos institutos do JSON
async function fetchInstitutes() {
  const response = await fetch('/institutes_data.json');  // Caminho para o arquivo JSON
  const data = await response.json();
  return data.institutes;
}

function Navbar_result() {
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    // Carregar dados dos institutos no estado
    fetchInstitutes().then(data => setInstitutes(data));
  }, []);

  return (
    <div>
      <Navbar className="navv fixed-top " bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand  className="nomesite fw-bold">Extras USP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="posicao-navbar ms-auto text-center d-flex justify-content-center align-items-center">
              <Nav.Link as={Link} to="/" className="text-secondary">Início</Nav.Link>              
              <NavDropdown title="Institutos" id="basic-nav-dropdown" className="text-secondary">
                {institutes.map((institute) => (
                  <NavDropdown.Item key={institute.id} as={Link} to={`/institute/${institute.id}`}>
                    {institute.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar_result;
