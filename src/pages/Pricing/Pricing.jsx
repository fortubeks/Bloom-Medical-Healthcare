import './Pricing.css';
import { Navbar } from '../../components';
import arrow from '../../assets/arrowDown.svg';

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing__header">
        <Navbar hideLinks />
        <div className="pricing__header__text">
          <h1>
            BLOOM
            <br /> PACKAGES
          </h1>

          <div className="pricing__header__icon">
            <img src={arrow} alt="arrow icon" />
          </div>
        </div>
      </div>
      <div className="pricing__body">
        <h1>OUR PACKAGES</h1>
        <h6>
          Explore our pakages and choose which one is best for your business
        </h6>
        <div className="pricing__body__packages">
          <div className="pricing__body__packages__card"></div>
          <div className="pricing__body__packages__card"></div>
          <div className="pricing__body__packages__card"></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
