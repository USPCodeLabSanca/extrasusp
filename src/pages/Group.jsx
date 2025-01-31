import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Group.css";


function Page() {
  const [group, setGroup] = useState(null); // Estado para armazenar os dados do grupo
  const [loading, setLoading] = useState(true); // Estado para indicar carregamento
  const { instituteId, groupId } = useParams(); // Obtém o ID do instituto e do grupo da URL
  const navigate = useNavigate();

  const fetchInstitutes = useCallback(async () => {
    try {
      const response = await fetch("/institutes_data.json"); 
      const data = await response.json();

      // Procurar o instituto pelo ID
      const institute = data.institutes.find(
        (institute) => institute.id.toString() === instituteId
      );

      if (institute) {
        // Procurar o grupo dentro do instituto
        const groupData = institute.groups.find(
          (group) => group.id.toString() === groupId
        );

        if (groupData) {
          setGroup(groupData); 
        } else {
          navigate("/notfound"); 
        }
      } else {
        navigate("/notfound"); 
      }
    } catch (error) {
      console.error("Erro ao buscar os dados dos institutos:", error);
      navigate("/notfound"); 
    } finally {
      setLoading(false); 
    }
  }, [instituteId, groupId, navigate]);

  useEffect(() => {
    setLoading(true); 
    fetchInstitutes();
  }, [fetchInstitutes]); 

  if (loading) {
    return <div>Carregando...</div>; 
  }

  if (!group) {
    return <div>Grupo não encontrado.</div>; 
  }

  return (
    
    <div className="page-container">
     <h1 className='nome mt-5 mb-5'>{group.name}</h1>
     <section className="hero-section">
      <div className="hero-content">
        <img src={group.logo} alt="Frente de Estudo" /> 
      </div>
    </section>
     <div class="container text-center">
  <div class="row align-items-start ml-3px">
    <div class="col">
    <h2 className='nome'> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
</svg> Sobre o grupo</h2>
    <section className="other-activities">
        <p>{group.detailedDescription}</p>
      
    </section>


    </div>
    
    <div class="col">
    <h3 className='nome'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg> Outras Atividades</h3>
    <section className="other-activities">
      
        <p>{group.otherActivities}</p> 
    </section>
    </div>
  </div>
</div>

   
    
   

    <section className="social-media">
        <div>
          <h3>Redes Sociais</h3>
          <ul>


          <div class="row align-items-start ml-3px">
              <div class="col">
              <li>
            <a href={group.site} target="_blank" rel="noopener noreferrer">
                 site
                </a>
            </li>
              <li>
                <a href={group.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>

                </li>
              </div>

              <div class="col" id='rede' >
              <li>
                <a href={group.youtube} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
              <a href={group.telegram} target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </li>
           
              </div>
            
          </div>



























          
             
          </ul>
        </div>
     
    </section>
  </div>
  );
}

export default Page;
