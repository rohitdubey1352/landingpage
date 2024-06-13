import Peoples from "../assets/Images/Peoples.png";
import People_circle from "../assets/Images/testimonial.png";
import Gradient from "../assets/Images/Gradient.png";
import Star from "../assets/Images/Star.png";
const Testimonial = () => {
  return (
    <>
      <section className="testimonial my-5">
        <div className="heading text-center m-auto">
          <p className="text-uppercase">testimonial</p>
          <h2>
            What Our Users <br /> Say About Us?
          </h2>
        </div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6 col-md-6">
              <img src={People_circle} className="peoples" alt="peoples" />
              <img src={Gradient} className="Gradient" alt="bg" />
              <img src={Star} className="Star" alt="star" />
            </div>
            <div className="col-12 col-lg-6 col-md-6 px-5">
              <h3 className="text-capitalize">
                the best financial accounting app ever!
              </h3>
              <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </p>
              <div className="peoples">
                <img src={Peoples} alt="Peoples" />
                <p>nick jonas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
