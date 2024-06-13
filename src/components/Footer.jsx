import Logo from "../assets/Images/logo.png";
import Email from "../assets/Images/email.png";
import Phone from "../assets/Images/phone.png";

const Footer = () => {
  return (
    <>
      <footer className="my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-2 col-md-2 contact d-flex justify-content-start align-items-start flex-column text-left">
              <img src={Logo} alt="logo" />
              <div className="email ">
                <img src={Email} alt="email" />
                <a href="mailto:Help@Frybix.com" className="mx-2 text-dark">
                  Help@Frybix.com
                </a>
              </div>
              <div className="phone">
                <img src={Phone} alt="phone" />
                <a href="tel:+123445667889" className="mx-2 text-dark">
                  +1234 456 678 89
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-2">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Bookings</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-2 col-md-2">
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-2 col-md-2">
              <h3>Product</h3>
              <ul>
                <li>
                  <a href="#">Take Tour</a>
                </li>
                <li>
                  <a href="#">Live Chat</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <h3>Newsletter</h3>
              <a href="#">Stay Up To Date</a>
              <form className="d-flex my-2">
                <input type="email" placeholder="Your email" required />
                <button className="btn" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="copyrite my-5">
            <hr />
            <p className="text-center text-capitalize">
              Copyright 2022 uifry.com all rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
