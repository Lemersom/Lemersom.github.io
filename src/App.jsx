import { useState } from 'react'
import './App.css'

import Profile from './components/Profile'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ListComponent from './components/ListComponent'
import Education from './components/Education'

function App() {
  
  const mainTechs = [
    "JavaScript",
    "Node.js",
    "React.js",
    "React Native",
    "SQL e Bancos de Dados Relacionais",
    "Windows e Linux"
  ]

  const techs = [
    "HTML e CSS",
    "Docker",
    "Git e GitHub",
    "Java",
    "Python",
    "C",
    "NoSQL",
    "UML e Orientação a Objetos",
    "Padrões de Projeto",
    "Arquitetura de Software",
    "WordPress (Elementor)"
  ]

  const outro = [
    "Inglês Avançado (C1)"
  ]

  return (
    <>
      <div className='main-body'>
        <div className='left-body'>
          <Profile 
            name="Lémersom Fernandes Filho"
            title="Desenvolvedor de Software"
            image="./ProfilePicture.jpg"
          />

          <h3 className='topic'>Educação</h3>
          <Education 
            period="07/2021 - atual"
            institution="Universidade Tecnológica Federal do Paraná (UTFPR)"
            course="Análise e Desenvolvimento de Sistemas"
          />

          <h3 className='topic'>Experiências</h3>
          <Experience 
            title="Desenvolvedor Front-End Freelancer"
            techs="HTML, CSS, Bootstrap, JavaScript"
            about="Fiquei responsavel em desenvolver o Front-End de 2 Sistemas Web distintos. Seguindo os designs projetados, eu desenvolvi as telas dos 2 sistemas e pude contribuir para que a empresa conseguisse terminar os sistemas. Teve uma duração de 2 meses e era realizada reuniões diárias para conversar sobre o avanço dos projetos"
          />
          <Experience 
            title="SatisfyingYou - App coletor de votos React Native"
            techs="React Native, Firebase"
            about="Projeto realizado em grupo para a disciplina de Programação Para Dispositivos Móveis. O SatisfyingYou é um aplicativo multiplataforma cuja função é coletar votos"
            link="https://github.com/Lemersom/SatisfyingYou"
          />
          <Experience 
            title="Deck Builder Yu-Gi-Oh"
            techs="React.js, Node.js, Express.js, MySQL, Docker, Redis, RabbitMQ e Websocket"
            about="Projeto Final realizado em dupla para a disciplina de Programação Web Fullstack. O projeto possui: Um servidor HTTP desenvolvido em Node.js seguindo o padrão API Rest. Um servidor Websocket retornando uma mensagem para os usuário sempre que um item for adicionado. Um servidor de cache para as pesquisas. E um servidor de Mensageria para a criação de Logs"
            link="https://github.com/Lemersom/DeckBuilderYuGiOh"
          />
          <Experience 
            title="Web Scraper Amazon"
            techs="Node.js, Express.js, Cheerio e EJS Template"
            about="Projeto realizado durante um desafio de programação. O programa realiza Web Scraping para extrair informações essencias dos resultados de pesquisa de produtos da Amazon, mostrando esses dados para o usuário"
            link="https://github.com/Lemersom/WebScraperAmazon"
          />

        </div>
        <div className='right-body'>
          <h3 className='topic'>Contato</h3>
            <Contact 
              email="lemerfilho@gmail.com"
              linkedinTxt="www.linkedin.com/in/lemersom/"
              linkedinLink="https://www.linkedin.com/in/lemersom/"
              githubTxt="github.com/Lemersom"
              githubLink="https://github.com/Lemersom"
            />

          <ListComponent 
            topic="Tecnologias Principais"
            list={mainTechs}
          />

          <ListComponent
            topic="Tecnologias Conhecidas" 
            list={techs}
          />

          <ListComponent
            topic="Outro" 
            list={outro}
          />

        </div>
      </div>
    </>
  )
}

export default App
