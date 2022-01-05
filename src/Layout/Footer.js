import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css';

function Footer() {
    return ( 
        <footer>
            <nav className={styles.social_list}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </nav>
            
            <p>Nosso rodapé</p>
        </footer>
     );
}

export default Footer;