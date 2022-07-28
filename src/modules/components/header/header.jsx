// import './header.css'
import logo from './img/logo-icon-solid-horizontal.svg'
import './header.css'
import { Link, NavLink } from 'react-router-dom';
import PhoneNumberContainer from './phoneNumber-Container';
import ThemeContainer from './theme/theme-Container';



const Header = (props) => {
 

  return (
    <header id="header">
      <div className="header__container">
      <NavLink as={Link} to='/main' > <img className="header__logo" src={logo} alt="logo"></img></NavLink>
      
        <div className="leftBlock">
          {/* <PhoneNumberContainer /> */}
          <ThemeContainer mainClass={props.mainClass}/>
        </div>


      </div>

    </header>
  );
}

export default Header;