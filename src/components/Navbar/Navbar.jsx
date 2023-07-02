import { useState } from 'react';
import './Navbar.css';
import { IconButton, useMediaQuery } from '@mui/material';
import { Close, DragHandle } from '@mui/icons-material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const Navbar = ({ hideLinks }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isMobileScreens = useMediaQuery('(max-width: 600px)');

  const navigate = useNavigate();

  return (
    <nav>
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            {isMobileScreens ? <img src={Logo} alt="logo" /> : 'BLOOM'}
          </Link>
        </div>

        <div className="navbar__links">
          {!hideLinks && (
            <ul>
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <a
                  href="http://app.bloomsoft.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          )}

          <button
            className="navbar__links__button"
            onClick={() => navigate('/register')}
          >
            Try For Free
          </button>
        </div>

        <div className="navbar__mobile">
          <div className="navbar__mobile__icon">
            <IconButton className="navbar__mobile__icon__button">
              <DragHandle onClick={() => setMenuOpen(true)} />
            </IconButton>
          </div>

          {isMenuOpen && (
            <>
              <div
                className={`${
                  hideLinks
                    ? 'new__navbar__mobile__overlay slide__bottom'
                    : 'navbar__mobile__overlay slide__bottom'
                }`}
              >
                <div className="navbar__mobile__icon">
                  <IconButton className="navbar__mobile__icon__button">
                    <Close onClick={() => setMenuOpen(false)} />
                  </IconButton>
                </div>
                <div className="navbar__mobile__links">
                  {!hideLinks && (
                    <ul>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <a
                          href="http://app.bloomsoft.co"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/pricing">Pricing</Link>
                      </li>
                    </ul>
                  )}

                  <button
                    className="navbar__links__button"
                    onClick={() => navigate('/register')}
                  >
                    Try For Free
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
