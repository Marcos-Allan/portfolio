//IMPORTAÇÃO DOS ÍCONES
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return(
        <div
            className={`w-full p-12 flex flex-col items-center justify-center bg-my-primary text-my-quartenary`}
            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
        >
            <div className={`flex gap-5 z-[4]`}>
                <a
                    href="https://www.linkedin.com/in/allan-menezes-026aba323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-all duration-[.2s] hover:scale-[1.2]`}
                >
                    <AiFillLinkedin
                        className={`text-[60px]`}
                    />
                </a>
                <a
                    href="mailto:allanmenezes880@gmail.com"
                    target="_blank"
                    className={`transition-all duration-[.2s] hover:scale-[1.2]`}
                >
                    <MdEmail
                        className={`text-[60px]`}
                    />
                </a>
                <a
                    href="https://www.instagram.com/marcos_4llan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-all duration-[.2s] hover:scale-[1.2]`}
                >
                    <AiFillInstagram
                        className={`text-[60px]`}
                    />
                </a>
            </div>
            
            <p className={`z-[4] mt-4`}>&copy; Marcos Allan</p>

        </div>
    )
}