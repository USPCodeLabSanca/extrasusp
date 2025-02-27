import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import { useNavigate } from "react-router-dom";
import Card from "../components/Cards/Card";
import "./extensiongroup.css";


type Group = {
  institute: string;
  name: string;
  logo: string;
  description: string;
  link: string;
  campus: string;
  tags: string[];
};

function ExtensionGroups() {
  const [groups, setGroups] = useState<Group[]>([]); // Estado tipado corretamente
  const [filteredGroups, setFilteredGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Estado para indicar erro
  // const navigate = useNavigate();
  const [filterName, setFilterName] = useState("");
  const [filterCampus, setFilterCampus] = useState("");
  const [filterInstitute, setFilterInstitute] = useState("");
  const [filterTags] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Função para buscar os dados de todos os grupos
  const fetchGroups = async () => {
    try {
      const response = await fetch("./groups.json");
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados.");
      }
      const data = await response.json();

      if (data.length > 0) {
        setGroups(data);
        setFilteredGroups(data);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados dos grupos", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  useEffect(() => {
    let filtered = groups;

    if (filterName) {
      filtered = filtered.filter(group =>
        group.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }

    if (filterInstitute) {
      filtered = filtered.filter(group =>
        filterInstitute && filterInstitute !== "Todos" ? group.institute === filterInstitute : true
      );
    }

    if (filterCampus) {
      filtered = filtered.filter(group =>
        filterCampus && filterCampus !== "Todos" ? group.campus === filterCampus : true
      );
    }

    // Filtra por tags selecionadas
    if (selectedTags.length > 0) {
      filtered = filtered.filter(group =>
        selectedTags.every(tag => group.tags.includes(tag))
      );
    }

    const filterGroups = filtered.reduce<Group[]>((acc, group) => {
      if (!acc.some(existsGroup => existsGroup.name === group.name)) {
        acc.push(group);
      }
      return acc;
    }, []);

    setFilteredGroups(filterGroups); // Atualiza os grupos
  }, [filterName, filterInstitute, filterCampus, selectedTags, groups]);

  // Pega todas tags
  const allTags = Array.from(new Set(groups.flatMap(group => group.tags)));

  // Filtra as tags com base no termo de busca
  const filteredTags = allTags.filter(tag =>
    tag.toLowerCase().includes(filterTags.toLowerCase())
  );

  const addTagSelection = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeSelectedTag = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <div className="error-message">Erro ao carregar os dados. Tente novamente mais tarde.</div>;
  }

  const campus = Array.from(new Set(groups.map(group => group.campus)));
  const institutes = Array.from(new Set(groups.map(group => group.institute)));
  

  return (
<Container fluid className="container-info">
<div className="row">
    <div className="bg-light col-lg-2 col-sm-3 col-12 col-sm-4">
        <div className="sticky-top">
            <div className="barra">
              <ul className="nav flex-column">
                <div className="pesquisa">
                  <Form.Control className="barra_p" type="text" placeholder="Busque pelo nome..." value={filterName} onChange={(event) => setFilterName(event.target.value)}/>                                           
                </div>
                <div className="filtros">
                  <label>Campus</label>
                  <Form.Select className="barra_f" value={filterCampus} onChange={(event) => setFilterCampus(event.target.value)}>
                    <option >Todos</option> 
                    {campus.map((campus) =>(
                      <option key={campus} value={campus}>
                        {campus}
                      </option>
                    ))}
                  </Form.Select>
                  <label>Institutos</label>
                  <Form.Select className="barra_f" value={filterInstitute} onChange={(event) => setFilterInstitute(event.target.value)}>
                    <option >Todos</option> 
                    {institutes.map((institute) =>(
                      <option key={institute} value={institute}>
                        {institute}
                      </option>
                    ))}
                  </Form.Select>
                  <label>Tags</label>
                  <div className="selected-tags">
                    {selectedTags.map(tag => (
                      <div key={tag} className="selected-tag">
                        {tag}
                        <span className="remove-tag" onClick={() => removeSelectedTag(tag)}>x</span>
                      </div>
                    ))}
                  </div>
                  <div className="tags-list">
                    {filteredTags.map(tag => (
                      selectedTags.includes(tag) ? null :
                      <div
                        key={tag}
                        className={`tag-item ${selectedTags.includes(tag) ? 'selected' : ''}`}
                        onClick={() => addTagSelection(tag)}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </ul>
            </div>
        </div>
    </div>
    <div className="col-lg-10 col-sm-8 ml-auto" id="main">
       <div className="conteudo">
       <h2 className="temapadrao mt-3">Grupos</h2>

      <div
          className="card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group) => (
              <button
                key={group.name}
                onClick={() => window.open(group.link, "_blank")}
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
                  miniDescription={group.description}
                  logo={group.logo}
                />
              </button>
            ))
          ) : (
            <p>Nenhum grupo de extensão disponível.</p>
          )}
        </div>
      </div>
</div>
</div>
    </Container>
  );
}

export default ExtensionGroups;