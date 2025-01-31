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
    <Container>
      <div>
      <h1 className=" temapadrao mt-5">{object.name || "Nome do Instituto"} </h1>

      <div
        id="carouselExampleIndicators"
        className="carousel slide mx-auto p-2"
        style={{ maxWidth: "100%", height: "400px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={object.logo}
              className="d-block w-50 mx-auto p-2"
              style={{ height: "80%", objectFit: "cover" }}
              alt={object.name || "Imagem do Instituto"}
            />
          </div>
          <div className="carousel-item">
            <img
              src={object.image1}
              className="d-block w-50 mx-auto p-2"
              style={{ height: "100%", objectFit: "cover" }}
              alt={object.name || "Imagem do Instituto"}
            />
          </div>
          <div className="carousel-item">
            <img
              src={object.image2}
              className="d-block w-50 mx-auto p-2"
              style={{ height: "100%", objectFit: "cover" }}
              alt={object.name || "Imagem do Instituto"}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="temapadrao mt-5">Sobre o Instituto</h2>
      <p className="cursos">
        <b>Os cursos do instituto são:</b>
        <ul>
          {object.courses?.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </p>
      <h2 className="temapadrao mb-3">Mapa</h2>
      <iframe
        src={object.map || ""}
        width="500" 
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa"
      ></iframe>

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
