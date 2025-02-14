import React, { useState, useEffect } from "react";
import "./extensiongroup.css";
import Card from "../components/Cards/Card";
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';

// Definição dos tipos de dados esperados
type Group = {
  id: number;
  name: string;
  miniDescription: string;
  logo: string;
};

type Institute = {
  id: number;
  name: string;
  groups?: Group[];
};

function ExtensionGroups() {
  const [institutes, setInstitutes] = useState<Institute[]>([]); // Estado tipado corretamente
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Estado para indicar erro
  const navigate = useNavigate();

  // Função para buscar os dados de todos os institutos
  const fetchInstitutes = async () => {
    try {
      const response = await fetch("/institutes_data.json");
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados.");
      }
      const data = await response.json();

      if (data.institutes && data.institutes.length > 0) {
        setInstitutes(data.institutes);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados dos institutos:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstitutes();
  }, []);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="error-message">Erro ao carregar os dados. Tente novamente mais tarde.</div>;
  }

  return (
<Container fluid className="container-info">
<div className="row ">
    <div className="bg-light col-lg-2 col-sm-3  ">
        <div className="sticky-top">
            <div className="barra ">
              <ul className="nav flex-column">

            
           oioioioi
              </ul>
            </div>
        </div>
    </div>
    <div className="col-lg-10 col-sm-8 ml-auto" id="main">
       <div className="conteudo">
       <h2 className="temapadrao mt-3">Grupos de extensão</h2>


{institutes.map((institute) => (
      <div key={institute.id} style={{ marginBottom: "40px" }}>
        <h3>{institute.name}</h3> {/* Nome do instituto */}

        <div
          className="card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {institute.groups && institute.groups.length > 0 ? (
            institute.groups.map((group) => (
              <button
                key={group.id}
                onClick={() => navigate(`/institute/`)} //mudar aqui para colocar link da rede social
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
            ))
          ) : (
            <p>Nenhum grupo de extensão disponível.</p>
          )}
        </div>
      </div>
    ))}
</div>
</div>
        </div>

    </Container>
  );
}

export default ExtensionGroups;