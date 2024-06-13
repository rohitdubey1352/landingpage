import Ring from "../assets/Images/Ring.png";
import Phone from "../assets/Images/Sami.png";
import Star from "../assets/Images/fullstar.png";
import BlackStar from "../assets/Images/Star.png";
import Gradient from "../assets/Images/Gradient.png";

const Fully_customizable = () => {
  return (
    <>
      <section className="fully_customizable my-5">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6 col-md-6">
              <figure>
                <img src={Ring} alt="Ring" className="img-fluid" />
                <img src={Phone} alt="phone" className="iphone img-fluid" />
                <img src={BlackStar} className="Blackstar" alt="stars" />
                <img src={BlackStar} className="Blackstar2" alt="stars" />
                <img src={Gradient} className="gradient" alt="bg" />
              </figure>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <div className="heading d-flex align-items-center">
                <img src={Star} alt="star" />
                <h2 className="mx-3">Fully Customizable</h2>
              </div>
              <p>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fully_customizable;
