import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './headerLoader'
import './CSS/header.css'
function Header(props) {
  const Navigate = useNavigate();
  const [headerBackground, setHeaderBackground] = useState('transparent');
  const color = props.color;
  const anticolor = color === 'white' ? 'black' : 'white'
  const [linkbg, setLinkbg] = useState(color);
  const handleLinkClick = () => {
    window.location.href = '/#/Results'; // Set the URL to the desired location
    // window.location.reload();
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderBackground("#fff");
        document.getElementsByClassName('cm-header-wrap')[0].style.marginTop = '-1px';
        if (window.innerWidth > 991) {
          document.getElementsByClassName('cm-menu-inner')[0].style.boxShadow = '0 0 2rem 0 rgba(0,0,0,0.2)'
        }
        // color === 'white' ? setLinkbg(anticolor) : setLinkbg(color)
      } else {
        color === 'white' ? setHeaderBackground('transparent') : setHeaderBackground('#fff');
        if (window.innerWidth > 991) {
          document.getElementsByClassName('cm-header-wrap')[0].style.marginTop = '15px';
          document.getElementsByClassName('cm-menu-inner')[0].style.boxShadow = 'none'
        }
        // setLinkbg(color)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleAboutLink = () => {
    const element = document.getElementsByClassName('about-container')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('about-container')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  const handleSponsersLink = () => {
    const element = document.getElementsByClassName('Sponsers')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('Sponsers')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  const handleFooterLink = () => {
    const element = document.getElementsByClassName('footer-div')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('footer-div')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  const HomeLink = () => {
    const element = document.getElementsByClassName('logos')[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate('/');
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName('logos')[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };
  return (
    <section className='header'>
      <div className='logos'>
        <Link to='/'> <img className='comapny-logo' src={require('./Assests/logo-1.png')} /></Link>
      </div>
      <div className="cm-header-wrap" style={{ backgroundColor: headerBackground }}>
        <div className="cm-menu-wrap">
          <div className="cm-menu-btn fa fa-bars"></div>
          <div className="cm-menu-inner">
            <ul className="menu-ul clear-all" >
              <li className="has-child">
                <div onClick={HomeLink} className='about-link links' style={{ color: linkbg }}><Link to="/" className='links' style={{ color: linkbg }}>Home</Link></div>
              </li>
              <li className="has-child">
                <div onClick={handleAboutLink} className='about-link links' style={{ color: linkbg }}><Link to="/" className='links' style={{ color: linkbg }}>About</Link></div>
              </li>
              <li className="has-child">
                <Link to="https://scoreboard.interiit.in/" className='link1 links' style={{ color: linkbg }}>Live Scores</Link>
              </li>
              <li className="has-child">
                <Link to="/Schedule" className='link1 links' style={{ color: linkbg }}>Schedule</Link>
              </li>
              <li className="has-child">
                {/* <a href="https://interiit.in/#/Results" >Results</a> */}
                <Link to="/Results"  className='link1 links' style={{ color: linkbg }}>Results</Link>
              </li>
              <li className="has-child">
                <div onClick={handleSponsersLink} className='about-link links' style={{ color: linkbg }}><Link to="/" className='links' style={{ color: linkbg }}>Sponsers</Link></div>
              </li>
              <li className="has-child aquatics-header">
                <Link to="/" className='link1 links' style={{ color: linkbg }}>Aquatics</Link>
                <Link to="/Aquatics/Schedule" className='link1 links aquatics-link' style={{ color: linkbg }}>Schedule</Link>
                <Link to="/Aquatics/Results" className='link1 links aquatics-link aquatics-link-2' style={{ color: linkbg }}>Results</Link>
              </li>
              <li className="has-child">
                <div onClick={handleFooterLink} className='link1 links about-link' style={{ color: linkbg, fontSize: "1.4rem" }}><Link to="/" className='links' style={{ color: linkbg }}>Contact us</Link></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;