import './Footer.css';
import arrow from '../../assets/Arrow 1.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import linkedIn from '../../assets/linkedIn.svg';
import whatsapp from '../../assets/whatsapp.svg';

const Footer = () => {
  return (
    <div className="footer">
      <h1>BLOOM</h1>
      <h4>Want to connect with us?</h4>
      <span>
        <h2>Send us an email</h2>
        <img src={arrow} alt="arrow icon" />
      </span>
      <div className="footer__socials">
        <img src={instagram} alt="instagram icon" />
        <img src={twitter} alt="twitter icon" />
        <img src={linkedIn} alt="linkedIn icon" />
        <img src={whatsapp} alt="whatsapp icon" />
      </div>
      <p>2023 All rights reserved. Bloom</p>
    </div>
  );
};

export default Footer;
