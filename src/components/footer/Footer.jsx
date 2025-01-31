import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './Footer.css'

function Footer(){
    return(
    <footer className="footer">
        <ul className="estilos">
            <li>
                <a href="https://www.facebook.com/uspcodelabsanca/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/uspcodelabsanca/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
            </li>
            <li>
                <a href="https://br.linkedin.com/company/uspcodelab-sanca" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
            </li>
        </ul>
        <p>@2025 - CodeLab</p>
    </footer>
    )
}

export default Footer