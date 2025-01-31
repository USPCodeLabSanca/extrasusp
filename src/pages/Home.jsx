import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () =>{
    return(
        <Container>
            <div className="tema mt-5">
                <span className="topico1">O que são os Grupos Extracurriculares?</span>
            </div>
            <div className="ex1">
            Os <b>Grupos Extracurriculares</b> são iniciativas organizadas pelos alunos com o objetivo de colocar em prática os conhecimentos adquiridos durante o curso, integrando diversas áreas do saber. Esses grupos buscam o <b>desenvolvimento de novas soluções</b>, a <b>prestação de serviços à comunidade</b> e a <b>participação em competições</b>, tanto nacionais quanto internacionais. Além de proporcionar experiência prática, os grupos extracurriculares também favorecem o aprimoramento de habilidades essenciais, como <b>liderança</b>, <b>iniciativa</b>, <b>gestão</b> e <b>trabalho em equipe</b>, preparando os alunos para desafios profissionais no futuro. Importante destacar que a participação em atividades desses grupos pode contribuir com <b>horas de Atividades Acadêmicas Complementares (AAC)</b> e <b>Atividades Extensionistas (AEX)</b>, cumprindo a carga horária exigida pelos cursos.
            </div>
            <div className= "tema"> 
                <span className="topico2">O que são as Atividades Acadêmicas Complementares (AACs)?</span>
            </div>
            <div className="ex2">
                As <b>Atividades Acadêmicas Complementares (AACs)</b> têm como objetivo complementar o currículo do aluno, proporcionando conhecimentos e experiências que contribuem para a sua <b>formação profissional</b>. Elas permitem que o aluno aplique na prática os conteúdos aprendidos ao longo do curso, além de estimular o desenvolvimento de estudos independentes e a interdisciplinaridade. Cada curso estabelece uma <b>carga horária específica</b> para as AACs.
Para cumprir a carga horária exigida, o aluno pode participar de atividades em três áreas: <b>Acadêmicas (de Graduação)</b>,  <b>Pesquisa e Cultura e Extensão</b>. É necessário que o aluno realize atividades em pelo menos dois desses grupos. As horas dedicadas a essas atividades serão contabilizadas para o total exigido ao longo da graduação. As atividades devem ser realizadas durante todo o curso, respeitando a carga horária definida para cada uma delas.

            </div>

            <div className= "tema"> 
                    <span className="topico3">O que são as Atividades Extensionistas Curriculares (AEX)?</span>
            </div>
            <div className="ex3">
                As <b>Atividades Extensionistas Curriculares (AEX)</b> envolvem diversas formas de participação dos estudantes em atividades de extensão, com o objetivo de <b>conectar os conhecimentos adquiridos na Universidade à sociedade</b>. Sob a coordenação de docentes, os alunos irão desenvolver atividades que interagem com o público externo, permitindo que se aproximem do meio fora da universidade e ampliem seus conhecimentos <b>de maneira prática</b>. Essas atividades de extensão correspondem, no mínimo, a <b>10% (dez por cento)</b> do total da <b>carga horária curricular</b> do curso.
            </div>

        </Container>
    )
}

export default Home