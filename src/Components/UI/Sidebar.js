import './Sidebar.scss';

import { Link, NavLink } from 'react-router-dom';
import MyLogo from '../../assets/images/my-logo.png';
import MyLogoSub from '../../assets/images/my-logo-sub.png';
import MyLinks from '../../assets/images/my-links.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={MyLogo} alt="logo" />
                <img className="sub-logo" src={MyLogoSub} alt="Alan" />
            </Link>
            
            <nav>
                <NavLink 
                    exact="true"
                    activeclassname="activate" 
                    to="/"
                >
                    <FontAwesomeIcon icon={faHome} color="#4D9FCB" />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="activate" 
                    className="about-link" 
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color="#4D9FCB" />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="activate" 
                    className="contact-link" 
                    to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4D9FCB" />
                </NavLink>
            </nav>

            
            <ul>
                <img src={MyLinks} alt="my links" />
                <li>
                    <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/alan-trieu-165837180/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4D9FCB" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href='https://github.com/alantrieu'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4D9FCB" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;