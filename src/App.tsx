//IMPORTAÇÃO DAS BIBLIOTECAS
import { useState, useEffect, useRef } from 'react'

//IMPORTAÇÃO DOS COMPONENTES
import Menu from "./components/Menu";
import Footer from './components/Footer';
import Background from './components/Background';

//IMPORTAÇÃO DAS IMAGENS
import ft from './assets/imgs/ft_pf.jpeg'
import cp from './assets/imgs/cultural-passport-icon.png'
import lp from './assets/imgs/lipidios-icon.png'
import rg from './assets/imgs/relfex-game-icon.png'
import wc from './assets/imgs/waffle-clicker-icon.png'
import tp from './assets/imgs/table-periodic-icon.png'

//IMPORTAÇÃO DOS CURRÍCULOS
import currriculo from './assets/archives/Currículo.pdf'

//IMPORTAÇÃO DOS ÍCONES
import { SiMongodb, SiJquery, SiTailwindcss, SiMysql, SiTypescript, SiFirebase, SiExpo, SiVite, SiNodedotjs, SiBootstrap, SiFigma, SiNextdotjs, SiReact, SiGit, SiGithub, SiHtml5, SiCss3, SiJavascript, SiPhp } from "react-icons/si";
import Card from './components/Card';

export default function App() {
  //FAZ REFERÊNCIA A UM ELEMENTO
  const homeRef = useRef<any>()
  const aboutRef = useRef<any>()
  const skillsRef = useRef<any>()
  const projectsRef = useRef<any>()

  //UTILIZAÇÃO DO HOOK useState
  const [windowSize, setWindowSize] = useState<any>({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [topPositions, setTopPositions] = useState<number[]>([0, 0, 0, 0])

  //FUNÇÃO CHAMADA TODA VEZ QUE A PÁGINA É RECARREGADA
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  //FUNÇÃO RESPONSÁVEL POR PEGAR A POSIÇÃO DO SCROLL DE CADA SESSÃO
  function getPositionTop() {
    if(homeRef.current){
      const topPosition = homeRef.current.getBoundingClientRect().top + window.pageYOffset
      updateItem(0, topPosition)
      console.log(`0: ${topPosition}`)
    }
    if(aboutRef.current){
      const topPosition = aboutRef.current.getBoundingClientRect().top + window.pageYOffset
      updateItem(1, topPosition)
      console.log(`1: ${topPosition}`)
    }
    if(skillsRef.current){
      const topPosition = skillsRef.current.getBoundingClientRect().top + window.pageYOffset
      updateItem(2, topPosition)
      console.log(`2: ${topPosition}`)
    }
    if(projectsRef.current){
      const topPosition = projectsRef.current.getBoundingClientRect().top + window.pageYOffset
      updateItem(3, topPosition)
      console.log(`3: ${topPosition}`)
    }
  }

  //FUNÇÃO RESPONSÁVEL POR PEGAR OS VALORES DO SCROLL DE CADA SESSÃO
  function updateItem(index:number, newValue:number) {
    setTopPositions((prevArray) => {
      const updatedArray = [...prevArray]
      updatedArray[index] = newValue
      return updatedArray
    })
  }

  //FUNÇÃO CHAMADA TODA VEZ QUE A PÁGINA É RECARREGADA
  useEffect(() => {
    getPositionTop()
  },[windowSize])

  return (
    <div className={`w-[100dvw] min-h-[100dvh] overflow-y-scroll overflow-x-hidden flex flex-col items-center justify-start bg-my-quartenary`}>
      <Menu homeTop={topPositions[0]} aboutTop={topPositions[1]} skillsTop={topPositions[2]} projectsTop={topPositions[3]} />

      <div ref={homeRef} id="home" className={`w-full overflow-x-hidden min-h-screen relative flex flex-col items-center justify-start bg-my-quartenary pt-[70px]`}>
        
        <Background />

        <div
          style={{ backgroundImage: `url('${ft}')` }}
          className={`mt-[60px] z-[3] rounded-full w-[250px] h-[250px] bg-top bg-cover opacity-[1] border-2 border-my-secondary`}
        />
        <h2 className={`z-[4] mt-[30px] font-bold text-my-secondary font-montserrat text-[38px]`}>Marcos Allan</h2>
        <h2 className={`z-[4] mt-[4px] text-my-secondary font-montserrat text-[28px]`}>Desenvolvedor Full-Stack</h2>

        <a href={currriculo} download={currriculo} className={`z-[4] cursor-pointer hover:underline hover:scale-[1.1] transition-all duration-[.2s] mt-12 rounded-[4px] border-[1px] border-my-secondary bg-my-quartenary py-2 px-10 text-[20px]`}>Download CV</a>
          

      </div>
      
      <div className={`w-full overflow-x-hidden min-h-screen relative flex flex-col items-center justify-start bg-my-secondary text-my-quartenary pt-[70px]`}>

        <h2 ref={aboutRef} id="about" className={`z-[4] text-[32px] font-montserrat mb-4 pt-4`}>About me</h2>

        <p className={`w-[90%] max-w-[600px] my-5 font-montserrat text-[20px] font-extralight leading-8`}>Sou um programador Full-Stack ja desenvolvi diversos projetos com diversas tecnologias como <span className={`rounded-[4px] p-[2px] bg-[#E34F26]`}>HTML</span>, <span className={`rounded-[4px] p-[2px] bg-[#1572B6]`}>CSS</span>, <span className={`rounded-[4px] p-[2px] bg-[#F7DF1E]`}>JS</span>, <span className={`rounded-[4px] p-[2px] bg-[#3178C6]`}>Typescript</span>, <span className={`rounded-[4px] p-[2px] bg-[#47A248]`}>MongoDB</span>, <span className={`rounded-[4px] p-[2px] bg-[#FFCA28]`}>Firebase</span>, <span className={`rounded-[4px] p-[2px] bg-[#4479A1]`}>MySQL</span>, <span className={`rounded-[4px] p-[2px] bg-[#777BB4]`}>PHP</span>,
        entre outras que você poderá ver abaixo.</p>

        <h2 ref={skillsRef} id="skills" className={`z-[4] text-[32px] font-montserrat mb-4 pt-4`}>Skills</h2>

        <div className={`z-[4] w-[80%] flex items-center flex-wrap gap-8 justify-center max-w-[600px] mb-12`}>
          
          <SiHtml5 className={`text-[60px] text-[#E34F26]`} />
          <SiCss3 className={`text-[60px] text-[#1572B6]`} />
          <SiJavascript className={`text-[60px] text-[#F7DF1E]`} />
          <SiTypescript className={`text-[60px] text-[#3178C6]`} />
          
          <SiGit className={`text-[60px] text-[#F05032]`} />
          <SiGithub className={`text-[60px] text-[#181717]`} />
          
          <SiReact className={`text-[60px] text-[#61DAFB]`} />
          <SiVite className={`text-[60px] text-[#646CFF]`} />
          <SiNextdotjs className={`text-[60px] text-[#000000]`} />

          <SiMongodb className={`text-[60px] text-[#47A248]`} />
          
          <SiFirebase className={`text-[60px] text-[#FFCA28]`} />
          <SiMysql className={`text-[60px] text-[#4479A1]`} />
          
          <SiFigma className={`text-[60px] text-[#F24E1E]`} />
          
          <SiJquery className={`text-[60px] text-[#0769AD]`} />
          
          <SiBootstrap className={`text-[60px] text-[#7952B3]`} />
          <SiTailwindcss className={`text-[60px] text-[#38BDF8]`} />
          
          <SiNodedotjs className={`text-[60px] text-[#339933]`} />
          <SiPhp className={`text-[60px] text-[#777BB4]`} />
          
          <SiExpo className={`text-[60px] text-[#00000d]`} />

        </div>
      </div>

      <div ref={projectsRef} id="projects" className={`w-full max-w-[1200px] overflow-x-hidden min-h-screen relative flex flex-wrap justify-center bg-my-quartenary pt-[70px] gap-12`}>
        <Card
          url='https://cultural-passport.vercel.app'
          title='Cultural Passport'
          img={cp}
          description='Aplicação com foco em ajudar nos estudos para vestibulares como o ENEM, desenvolvido como TCC em 2024 na ETEC Paulistano no curso de Desenvolvimento de Sistemas.'
          icons={['html', 'css', 'javascript', 'typescript', 'react', 'vite', 'mongodb', 'firebase', 'tailwindcss', 'nodejs', 'git', 'github']}
        />
        
        <Card
          url='https://marcos-allan.github.io/lipidios/'
          title='Lipídios'
          img={lp}
          description='Aplicação feita para uma apresentação de um trabalho escolar, que foca em apresentar os lipídos e suas curiosidades.'
          icons={['html', 'css', 'javascript', 'git', 'github']}
        />
        
        <Card
          url='https://marcos-allan.github.io/reflex_game/'
          title='Reflex Game'
          img={rg}
          description='Aplicação feita como um desafio cirar um jogo com o conhecimento que eu tinha até o momento, jogo simples de seguir o reflexo.'
          icons={['html', 'css', 'javascript', 'bootstrap', 'git', 'github']}
        />
        
        <Card
          url='https://marcos-allan.github.io/tablePeriodic/'
          title='Tabela Periódica'
          img={tp}
          description='Tabela Periódica feita para apresentar trabalho escolar sobre a tabela periódica e todos os seus elementos, apresentando informações sobre cada um dos 118 disponíveis.'
          icons={['html', 'css', 'javascript', 'git', 'github']}
        />
        
        <Card
          url='https://waffle-clicker.vercel.app/'
          title='Waffle Clicker'
          img={wc}
          description='Jogo simples de clicar no waffle, igualmente ao cookie clicker só que mais simples.'
          icons={['html', 'css', 'javascript', 'typescript', 'react', 'vite', 'firebase', 'tailwindcss', 'git', 'github']}
        />

      </div>

      <Footer />

    </div>
  )
}