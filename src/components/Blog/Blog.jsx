import './Blog.css';
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__header">
        <h1>BLOG</h1>
        <p>
          Check out our latest news and articles about the use of technology in
          the medical field
        </p>
      </div>
      <div className="blog__body">
        <div className="blog__body__card">
          <img src={blog1} alt="stethoscope" />
          <p>
            Check out our latest news and articles about the use of technology
            in the medical field
          </p>
        </div>
        <div className="blog__body__card">
          <img src={blog2} alt="heart rate monitor" />
          <p>
            Check out our latest news and articles about the use of technology
            in the medical field
          </p>
        </div>
        <div className="blog__body__card">
          <img src={blog3} alt="surgery room" />
          <p>
            Check out our latest news and articles about the use of technology
            in the medical field
          </p>
        </div>
      </div>
      <button className="blog__button">Visit Blog</button>
    </div>
  );
};

export default Blog;
