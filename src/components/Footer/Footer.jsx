import './Footer.css';
import arrow from '../../assets/Arrow 1.svg';
// import instagram from '../../assets/instagram.svg';
// import twitter from '../../assets/twitter.svg';
import linkedIn from '../../assets/linkedIn.svg';
import whatsapp from '../../assets/whatsapp.svg';

const Footer = () => {
  const openLinkedIn = () => {
    const url = 'https://www.linkedin.com/company/bloomsoft-medtech/';
    const newTab = window.open(url, '_blank');
    newTab.focus();
  };

  const openWhatsapp = () => {
    const url = 'https://wa.me/+2347080639991';
    const newTab = window.open(url, '_blank');
    newTab.focus();
  };

  return (
    <div className="footer" id="contact">
      <h1>BLOOM</h1>
      <h4>Want to connect with us?</h4>
      <span>
        <h2>
          <a href="mailto:hello@bloomsoft.co">Send us an email</a>
        </h2>
        <img src={arrow} alt="arrow icon" />
      </span>
      <div className="footer__socials">
        {/* <img src={instagram} alt="instagram icon" />
        <img src={twitter} alt="twitter icon" /> */}
        <img src={linkedIn} alt="linkedIn icon" onClick={openLinkedIn} />
        <img src={whatsapp} alt="whatsapp icon" onClick={openWhatsapp} />
      </div>
      <p>{new Date().getFullYear()}. All rights reserved. Bloom</p>
    </div>
  );
};

export default Footer;
