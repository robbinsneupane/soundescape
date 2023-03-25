import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">
          Sign up for the latest updates & offers!
        </span>
        <div className="form">
          <input type="text" placeholder="Email" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with out Privacy Policy.
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={16} />
          </div>
          <div className="icon">
            <FaInstagram size={16} />
          </div>
          <div className="icon">
            <FaTwitter size={16} />
          </div>
          <div className="icon">
            <FaLinkedin size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
