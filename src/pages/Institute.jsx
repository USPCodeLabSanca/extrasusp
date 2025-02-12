import React, { useState, useEffect } from "react";
import "./Institute.css";
import Card from "../components/Cards/Card";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';


function Sobre() {
  const [object, setObject] = useState(null); // Estado para armazenar o instituto
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento
  const navigate = useNavigate();
  const { id } = useParams(); // Obtém o ID do instituto da URL

  // Função para buscar os dados dos institutos
  const fetchInstitutes = async () => {
    try {
      const response = await fetch("/institutes_data.json"); 
      const data = await response.json();

      // Procurar o instituto pelo ID
      const institute = data.institutes.find(
        (institute) => institute.id.toString() === id
      );

      if (institute) {
        setObject(institute); // Atualizar o estado com os dados do instituto
      } else {
        navigate("/notfound"); 
      }
    } catch (error) {
      console.error("Erro ao buscar os dados dos institutos:", error);
      navigate("/notfound"); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    setLoading(true); 
    fetchInstitutes();
  }, [id, navigate]); 

  if (loading) {
    return <div>Carregando...</div>; 
  }

  if (!object) {
    return null; 
  }

  const handleCardClick = (groupId) => {
    navigate(`/institute/${id}/page/${groupId}`); 
  };

  return (
    <Container className="container-info">
      <div>
      <h2 className="temapadrao mt-3">Grupos de extensão</h2>
      <div
        className="card-container"
        style={{
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "space-evenly", 
        }}
      >
        {object.groups?.map((group) => (
          <button
            key={group.id}
            onClick={() => handleCardClick(group.id)} 
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card
              name={group.name}
              miniDescription={group.miniDescription}
              logo={group.logo}
            />
          </button>
        ))}
      </div>
    </div>
  </Container>
  
  );
}

export default Sobre;
