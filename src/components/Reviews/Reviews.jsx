import './Reviews.css';
import ceo from '../../assets/ceo.png';

const Reviews = () => {
  return (
    <div className="reviews">
      <h1>CUSTOMER REVIEWS</h1>
      <div className="reviews__review">
        <div className="reviews__review__info">
          <h4>
            Hear what some of our customers have to say about our service and
            its impact on their business
          </h4>
          <span>
            <h6>CEO A&B Pharma</h6>
            <h5>Obayemi Abimbola</h5>
            <p>2023</p>
          </span>
        </div>
        <div className="reviews__review__video">
          <img src={ceo} alt="ceo" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
