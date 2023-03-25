import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
            <div className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              necessitatibus expedita dolore adipisci iste qui vero sunt optio!
            </div>
          </div>
          <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
              <FaLocationArrow />
              602 Ray Court-Long Beach,North Carolina,28461
            </div>
            <div className="c-item">
              <FaMobileAlt />
              Phone: +1 9100 0098
            </div>
            <div className="c-item">
              <FaEnvelope />
              Email: soundscape@gmail.com
            </div>
          </div>
          <div className="col">
            <div className="title">Categories</div>
            <div className="text">Headphones</div>
            <div className="text">Smart Watches</div>
            <div className="text">Bluetooth Speakers</div>
            <div className="text">Wireless Earbuds</div>
            <div className="text">Home Theatre</div>
            <div className="text">Projectors</div>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <div className="text">Home</div>
            <div className="text">About Us</div>
            <div className="text">Privacy Policy</div>
            <div className="text">Returns</div>
            <div className="text">Terms & Cond.</div>
            <div className="text">Contact Us</div>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <div className="text"> Robbins Neupane &copy; 2023</div>
            <img src={Payment} alt="payment-methods" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
