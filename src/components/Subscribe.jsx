import Ring from "../assets/Images/White_Ring.png";
import AppleIcon from "../assets/Images/apple.png";
import Phone from "../assets/Images/Sub_phone.png";
import Gradient from "../assets/Images/sub_gradient.png";
import Star from "../assets/Images/Star.png";
import WhiteStar from "../assets/Images/WhiteStar.png";
import Gradient2 from "../assets/Images/Gradient.png";
const Subscribe = () => {
  return (
    <>
      <section className="sub">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 px-5 pt-5 text-white">
              <img src={Star} className="star" alt="star" />
              <img src={Star} className="star2" alt="star" />
              <img src={Gradient2} className="gradient2" alt="bg" />
              <h1 className="text-capitalize">ready to get started?</h1>
              <p className="text-capitalize">
                Risus habitant leo egestas mauris diam eget morbi tempus
                vulputate.
              </p>
              <img src={WhiteStar} className="WhiteStar" alt="star" />
              <img src={WhiteStar} className="WhiteStar2" alt="star" />
              <div className="apple">
                <button className="btn">Download App</button>
                <img src={AppleIcon} alt="apple" />
              </div>
              <img src={Ring} className="ring" alt="ring" />
            </div>
            <div className="col-12 col-lg-6 col-md-6 px-5 img_Grp">
              <img src={Gradient} className="gradient" alt="gradient" />
              <img src={Phone} className="phone img-fluid" alt="phone" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
