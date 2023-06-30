import './Pricing.css';
import { Navbar } from '../../components';
import arrow from '../../assets/arrowDown.svg';
import good from '../../assets/good.svg';
import bad from '../../assets/bad.svg';

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
          Explore our packages and choose which one is best for your business
        </h6>
        <div className="pricing__body__packages">
          <div className="pricing__body__packages__card">
            <h3>FREE</h3>
            <h4>Welcome product that gives you all you need to get started</h4>
            <h5>Pay now</h5>
            <span>
              <p>
                <sup>₦</sup>
              </p>
              <p>0k</p>
              <p>
                <sub>/yr</sub>
              </p>
            </span>
            <button>Buy Now</button>
            <h5>Plan Includes</h5>
            <ul>
              <li>
                <img src={good} alt="tick icon" />
                <p>Manage Patients Records (1k patients)</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Inventory Management</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Record Purchase Transactions</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Record Expenses</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Manage Suppliers</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Generate HMO monthly bills</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Record and Track HMO bills</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Access report of business performance</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Accounts Customization</p>
              </li>
            </ul>
          </div>
          <div className="pricing__body__packages__card">
            <h3>BASIC</h3>
            <h4>Welcome product that gives you all you need to get started</h4>
            <h5>Pay now</h5>
            <span>
              <p>
                <sup>₦</sup>
              </p>
              <p>100k</p>
              <p>
                <sub>/yr</sub>
              </p>
            </span>
            <button>Buy Now</button>
            <h5>Plan Includes</h5>
            <ul>
              <li>
                <img src={good} alt="tick icon" />
                <p>Manage Patients Records (3k patients)</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Inventory Management</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Record Purchase Transactions</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Record Expenses</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Manage Suppliers</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Generate HMO monthly bills</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Record and Track HMO bills</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Access report of business performance</p>
              </li>
              <li>
                <img src={bad} alt="x icon" />
                <p>Accounts Customization</p>
              </li>
            </ul>
          </div>
          <div className="pricing__body__packages__card">
            <h3>PROFESSIONAL</h3>
            <h4>Welcome product that gives you all you need to get started</h4>
            <h5>Pay now</h5>
            <span>
              <p>
                <sup>₦</sup>
              </p>
              <p>170k</p>
              <p>
                <sub>/yr</sub>
              </p>
            </span>
            <button>Buy Now</button>
            <h5>Plan Includes</h5>
            <ul>
              <li>
                <img src={good} alt="tick icon" />
                <p>Manage Patients Records (unlimited)</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Inventory Management</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Record Purchase Transactions</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Record Expenses</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Manage Suppliers</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Generate HMO monthly bills</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Record and Track HMO bills</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Access report of business performance</p>
              </li>
              <li>
                <img src={good} alt="tick icon" />
                <p>Accounts Customization</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
