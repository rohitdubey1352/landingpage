import Ring from "../assets/Images/Ring.png";
import Iphone from "../assets/Images/iPhone.png";
import Features_sub__part from "./Features_sub__part";
import Star from "../assets/Images/Icon.png";
import Cube1 from "../assets/Images/cube-02.png";
import Cube2 from "../assets/Images/cube-04.png";
import Gradient from "../assets/Images/Feature_gradient.png";
import Black_star from "../assets/Images/Star.png";

const Features = () => {
  return (
    <>
      <section className="features my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 features_img">
              <figure>
                <img src={Black_star} className="black_star" alt="star" />
                <img src={Ring} className="img-fluid ring" alt="ring" />
                <img src={Iphone} className="img-fluid iphone" alt="iphone" />
                <img src={Gradient} className="gradient" alt="bg" />
              </figure>
            </div>
            <div className="col-12 col-lg-6 col-md-6 features_content">
              <h5 className="text-uppercase">features</h5>
              <h2 className="text-capitalize">uifry premium</h2>

              <Features_sub__part
                img={Star}
                heading="budgeting intervals"
                para="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
              />
              <Features_sub__part
                img={Cube1}
                heading="budgeting intervals"
                para="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
              />
              <Features_sub__part
                img={Cube2}
                heading="budgeting intervals"
                para="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
