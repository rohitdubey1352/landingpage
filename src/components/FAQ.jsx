import Faq_sub__part from "./Faq_sub__part";
import Star from "../assets/Images/Star.png";

const FAQ = () => {
  return (
    <>
      <section className="faq my-5">
        <div className="faq_heading">
          <h5 className="text-uppercase">FAQ</h5>
          <h1 className="text-capitalize">
            Frequently asked <br /> questions
          </h1>
        </div>
        <img src={Star} className="star" alt="star" />
        <div className="faq_grid">
          <div className="orange">
            <Faq_sub__part
              heading="the best financial accounting app ever!"
              para="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
            />
          </div>
          <div className="white">
            <Faq_sub__part
              heading="the best financial accounting app ever!"
              para="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
            />
          </div>
          <div className="white">
            <Faq_sub__part
              heading="the best financial accounting app ever!"
              para="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
            />
          </div>
          <div className="orange">
            <Faq_sub__part
              heading="the best financial accounting app ever!"
              para="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
            />
          </div>
          <div className="orange">
            <Faq_sub__part
              heading="the best financial accounting app ever!"
              para="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
            />
          </div>
          <div className="white">
            <Faq_sub__part
              heading="the best financial accounting app ever!"
              para="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
