import { useState,useEffect} from "react";
import { Container,Row,Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg';


export const Banner = () => {
    const[loopNum,setLoopNum]=useState(0);
    const[isDeleting,setIsDeleting]=useState(false);
    const toRotate=["Web Developer","Developer .NET","Developer React"];
    const [text,setText]=useState('');
    const [delta,setDelta]=useState(300 - Math.random() * 100);
    const period=2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i =loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText=isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);
    
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500)
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenido a mi Portafolio Web</span>
                        <h1>{`Hola, soy Franco`}<br/><span className="wrap">{text}</span></h1>
                        <p>¡Hola! Soy Franco, un apasionado desarrollador de software de 19 años con sede en Lima, Perú. Desde que descubrí mi interés en el mundo de la programación, he estado trabajando incansablemente para mejorar mis habilidades y enfrentar desafíos emocionantes en el desarrollo de software. Mi enfoque principal es la creación de aplicaciones web modernas y dinámicas utilizando tecnologías como ASP.NET Core y ReactJS. Disfruto fusionando lo mejor de ambos mundos para crear experiencias de usuario excepcionales y eficientes.</p>
                        <button onClick={()=>console.log('connect')}>GO<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}