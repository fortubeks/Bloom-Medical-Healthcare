import './Services.css';
import arrow from '../../assets/Arrow 1.svg';
import planIcon from '../../assets/pajamas_planning.svg';
import documentIcon from '../../assets/mdi_paper-text-outline.svg';
import financeIcon from '../../assets/mdi_finance.svg';
import gadgets from '../../assets/gadgets.png';
import { NavLink } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services">
      <h1>WHAT WE OFFER</h1>
      <div className="services__contact">
        <div className="services__contact__info">
          <h2>
            Seamless Service <br /> to transform your business
          </h2>
          <span>
            <NavLink
              to="/"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <p>Contact Us</p>
              <img src={arrow} alt="arrow icon" />
            </NavLink>
          </span>
        </div>
        <div className="services__contact__image">
          <img src={gadgets} alt="gadgets" />
        </div>
      </div>
      <div className="services__service">
        <div className="services__service__card">
          <img src={planIcon} alt="plan icon" />
          <h4>Strategic Planning</h4>
          <p>
            Transform your business with data driven decision making. Get
            real-time insight on sales, growth, expenses and a lot more.
          </p>
        </div>
        <div className="services__service__card">
          <img src={documentIcon} alt="document icon" />
          <h4>Remote & Paperless</h4>
          <p>
            Run your business from anywhere you are in the world. Get real time
            updates on what's happening and take your business paperless.
          </p>
        </div>
        <div className="services__service__card">
          <img src={financeIcon} alt="finance icon" />
          <h4>Manage Finances</h4>
          <p>
            Track all your HMO payments, vendor payments, imprest, as well as
            other income and expenditure accounts.
          </p>
        </div>
      </div>
      <div className="services__info">
        <p>What we have achieved in the past two years</p>
        <div className="services__info__numbers">
          <span>
            <h2>40k+</h2>
            <p>Patients Reached</p>
          </span>
          <span>
            <h2>10+</h2>
            <p>Business Reached</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
