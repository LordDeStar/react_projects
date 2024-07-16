import './../App.css';
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
      <img src="https://i.ibb.co/DLPzKTB/logo.png" alt='Logo' className="logo"/>
      {width === "small" ? (
        <div className='container'>
          <button onClick={toggleMenu} className='nav-link but '>|||</button>
          <div className={`menu-bar ${width} ${isMenuOpen ? 'open' : ''}`}>
            <a href="#" className="nav-link">Enter</a>
            <a href="#" className="nav-link">My games</a>
            <a href="#" className="nav-link">My characters</a>
            <a href="#" className="nav-link">My assets</a>
          </div>
        </div>
      ) : (
        <div className="menu-bar">
          <a href="#" className="nav-link">Enter</a>
          <a href="#" className="nav-link">My games</a>
          <a href="#" className="nav-link">My characters</a>
          <a href="#" className="nav-link">My assets</a>
        </div>
      )}
    </div>
  );
}

export default Header;