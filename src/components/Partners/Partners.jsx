import './Partners.css';
import logo1 from '../../assets/image 1.png';
import logo2 from '../../assets/image 4.png';
import logo3 from '../../assets/image 2.png';
import logo4 from '../../assets/image 3.png';

const Partners = () => {
  return (
    <div className="partners">
      <h1>OUR PARTNERS</h1>
      <p>
        Take a look at our strategic partners who we work with round the clock
        to provides satisfactory services
      </p>
      <div className="partners__logo">
        <img src={logo1} alt="company logo" />
        <img src={logo2} alt="company logo" />
        <img src={logo3} alt="company logo" />
        <img src={logo4} alt="company logo" />
      </div>
    </div>
  );
};

export default Partners;
