//TIPAGEM DAS PROPS DO COMPONENTE
interface Props {
    homeTop: number,
    aboutTop: number,
    skillsTop: number,
    projectsTop: number,
}

export default function Menu(props: Props) {

    //FUNÇÃO REESPONSÁVEL POR SCROLLAR PARA A SESSÃO ESPECÍFICADA
    function scrollPage(pixels:number){
        console.log(pixels)
        window.scrollTo({
            top: pixels - 70,
            behavior: 'smooth'
        })
    }

    return(
        <div
            className={`z-[5] fixed top-0 w-full h-[70px] py-4 text-[20px] bg-my-secondary text-my-quartenary font-bold font-montserrat capitalize flex items-center justify-around`}
            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
        >
            <div className={`cursor-pointer hover:underline`} onClick={() => scrollPage(props.homeTop)}>home</div>
            <div className={`cursor-pointer hover:underline`} onClick={() => scrollPage(props.aboutTop)}>about</div>
            <div className={`cursor-pointer hover:underline`} onClick={() => scrollPage(props.skillsTop)}>skills</div>
            <div className={`cursor-pointer hover:underline`} onClick={() => scrollPage(props.projectsTop)}>projects</div>
        </div>
    )
}