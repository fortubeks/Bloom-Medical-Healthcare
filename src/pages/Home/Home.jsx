import './Home.css';
import {
  About,
  Blog,
  Navbar,
  Partners,
  Reviews,
  Services,
  Team,
} from '../../components';
import arrow from '../../assets/arrowDown.svg';

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <Navbar />
        <div className="home__header">
          <h1>
            YOUR MEDICAL
            <br /> PRACTICE MADE EASY
          </h1>

          <div className="home__description">
            <p>
              In March 2021, we set out on a journey to transform healthcare in
              Africa, one solution at a time.
            </p>

            <div className="home__icon">
              <img src={arrow} alt="arrow icon" />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Reviews />
      <Blog />
      <Team />
      <Partners />
    </>
  );
};

export default Home;
