//IMPORTAÇÃO DAS BIBLIOTECAS
import Lottie from 'lottie-react';

//IMPORTAÇÃO DA ANIMAÇÃO
import animation1 from '../../assets/animations/Animation4.json'
import animation2 from '../../assets/animations/Animation3.json'

export default function Background(){
    return(
        <div className={`absolute top-0 w-screen h-screen z-[3]`}>
            <div className={`w-full absolute top-0 flex justify-end`}>
                <Lottie
                    loop={true}
                    autoPlay={true}
                    animationData={animation1}
                    className={`w-full max-w-[900px]`}
                />
            </div>
          
            <div className={`w-full absolute bottom-0 flex justify-start`}>
                <Lottie
                    loop={true}
                    autoPlay={true}
                    animationData={animation2}
                    className={`w-full max-w-[900px]`}
                />
            </div>
        </div>
    )
}