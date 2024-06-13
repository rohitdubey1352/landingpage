import Iphone from "../assets/Images/2iphone.png";
import Notificate from "../assets/Images/bell.png";
import Ring from "../assets/Images/Ring.png";
import Star from "../assets/Images/Star 1.png";
import Gradient from "../assets/Images/Gradient.png";

const Advantages = () => {
  return (
    <>
      <section className="advantages">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6">
              <div className="advantage_content">
                <h5 className="text-uppercase">advantages</h5>
                <h2 className="text-capitalize">why choose uifry?</h2>
                <div className="notificate d-flex align-items-center">
                  <img src={Notificate} alt="bell" />
                  <h4 className="mx-3">clever notifications</h4>
                </div>
                <p>
                  Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                  ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                  tristique lacus, et blandit viverra nisl velit. Sed mattis
                  rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget
                  eget ac dolor neque lorem sapien, suspendisse aliquam.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <figure>
                <img src={Ring} className="img-fluid" alt="ring" />
                <img src={Iphone} className="iphone img-fluid" alt="iphone" />
                <img src={Star} className="star" alt="star" />
                <img src={Gradient} className="gradient" alt="gradient" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advantages;
