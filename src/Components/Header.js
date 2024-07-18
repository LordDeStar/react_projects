import { NavLink } from 'react-router-dom';
import './../Styles/Header.css';
import React, {useState, useEffect} from 'react';
const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  let width = windowWidth <= 600 ? "small" : '';
  return (
    <div className="nav-bar">
      <NavLink to='/about'><img src="https://i.ibb.co/DLPzKTB/logo.png" alt='Logo' className="logo"/></NavLink>
      {width === "small" ? (
        <div className='container'>
          <button onClick={toggleMenu} className='nav-link but'>|||</button>
          <div className={`menu-bar ${width} ${isMenuOpen ? 'open' : ''}`}>
            <NavLink to="/auth" className="nav-link">Enter</NavLink>
            <NavLink to="#" className="nav-link">My games</NavLink>
            <NavLink to="#" className="nav-link">My characters</NavLink>
            <NavLink to="#" className="nav-link">My assets</NavLink>
          </div>
        </div>
      ) : (
        <div className="menu-bar">
          <NavLink to="/auth" className="nav-link">Enter</NavLink>
          <NavLink to="#" className="nav-link">My games</NavLink>
          <NavLink to="#" className="nav-link">My characters</NavLink>
          <NavLink to="#" className="nav-link">My assets</NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;