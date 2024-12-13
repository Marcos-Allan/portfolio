//TIPAGEM DAS PROPS DO COMPONENTE
interface Props {
    title: string,
    img: string,
    description: string,
    icons: string[]
    url: string
}

//IMPORTAÇÃO DOS ÍCONES
import { SiMongodb, SiTailwindcss, SiTypescript, SiFirebase, SiVite, SiNodedotjs, SiBootstrap, SiReact, SiGit, SiGithub, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

export default function Card(props: Props) {

    //FUNÇÃO RESPONSÁVEL POR VERIFICAR SE O ITEM TEM NO ARRAY
    function containsWord(array:string[], word:string) {
        return array.includes(word)
    }

    return(
        <a
            target="_blank"
            href={props.url}
            className={`mb-6 p-3 border-2 border-my-secondary w-[90%] rounded-[6px] flex flex-col items-center justify-start cursor-pointer max-w-[400px] transition-all duration-[.2s] hover:scale-[1.02]`}
            style={{ boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)' }}
        >
          <h2 className={`font-montserrat text-center mb-4 mt-3 text-[36px]`}>{props.title}</h2>
          <img src={props.img} className={`rounded-[6px] w-[60%]`} />

          <p className={`my-8 font-montserrat w-[90%] text-center`}>
            {props.description}
          </p>

          <div className={`flex items-center flex-wrap gap-8 justify-center py-3 w-[80%]`}>
            {containsWord(props.icons, 'html') == true && (
                <SiHtml5 className={`text-[40px] text-[#E34F26]`} />
            )}
            {containsWord(props.icons, 'css') == true && (
                <SiCss3 className={`text-[40px] text-[#1572B6]`} />
            )}
            {containsWord(props.icons, 'javascript') == true && (
                <SiJavascript className={`text-[40px] text-[#F7DF1E]`} />
            )}
            {containsWord(props.icons, 'typescript') == true && (
                <SiTypescript className={`text-[40px] text-[#3178C6]`} />
            )}
            {containsWord(props.icons, 'react') == true && (
                <SiReact className={`text-[40px] text-[#61DAFB]`} />
            )}
            {containsWord(props.icons, 'vite') == true && (
                <SiVite className={`text-[40px] text-[#646CFF]`} />
            )}
            {containsWord(props.icons, 'mongodb') == true && (
                <SiMongodb className={`text-[40px] text-[#47A248]`} />
            )}
            {containsWord(props.icons, 'firebase') == true && (
                <SiFirebase className={`text-[40px] text-[#FFCA28]`} />
            )}
            {containsWord(props.icons, 'tailwindcss') == true && (
                <SiTailwindcss className={`text-[40px] text-[#38BDF8]`} />
            )}
            {containsWord(props.icons, 'nodejs') == true && (
                <SiNodedotjs className={`text-[40px] text-[#339933]`} />
            )}
            {containsWord(props.icons, 'bootstrap') == true && (
                <SiBootstrap className={`text-[40px] text-[#7952B3]`} />
            )}
            {containsWord(props.icons, 'git') == true && (
                <SiGit className={`text-[40px] text-[#F05032]`} />
            )}
            {containsWord(props.icons, 'github') == true && (
                <SiGithub className={`text-[40px] text-[#181717]`} />
            )}

          </div>
        </a>
    )
}