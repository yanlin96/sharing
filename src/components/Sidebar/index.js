import './index.scss';
import NavLogo from '../../assets/images/nav-logo2.png';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope, faImage } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return(
        <div className='nav-bar'>
            <Link className="logo" to="/">
                <img src={NavLogo} alt="JSDR" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#6a6a6a"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
                    <FontAwesomeIcon icon={faUser} color="#6a6a6a"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} color="#6a6a6a"/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/portfolio" className="portfolio-link">
                    <FontAwesomeIcon icon={faImage} color="#6a6a6a"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://linkedin.com">
                        <FontAwesomeIcon icon={faLinkedin} color="#6a6a6a"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com">
                        <FontAwesomeIcon icon={faTwitter} color="#6a6a6a"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com">
                        <FontAwesomeIcon icon={faInstagram} color="#6a6a6a"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com">
                        <FontAwesomeIcon icon={faGithub} color="#6a6a6a"/>
                    </a>
                </li>
            </ul>
        </div>

    );
}

export default Sidebar;