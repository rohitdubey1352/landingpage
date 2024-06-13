import Phones from "../assets/Images/Phones.png";
import Ring from "../assets/Images/Ring.png";
import LetterA from "../assets/Images/A.png";
import Gradient from "../assets/Images/Gradient2.png";

const Hero = () => {
  return (
    <>
      <main className="hero my-5">
        <div className="container-fluid">
          <div className="row m-auto d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6 col-md-6">
              <div className="main_content">
                <h1>
                  make the best <br /> financial decisions
                </h1>
                <p>
                  Cum et convallis risus placerat aliquam, nunc. Scelerisque
                  aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                  porttitor.
                </p>
                <div className="buttons">
                  <button className="btn">
                    Get Started
                    <svg
                      className="px-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="8"
                      viewBox="0 0 25 8"
                      fill="none"
                    >
                      <path
                        d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <a href="#" className="mx-4 watch_now text-dark">
                    <svg
                      className="mx-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                    >
                      <circle cx="14.5" cy="14.5" r="14" stroke="black" />
                      <path
                        d="M11 19.0809V9.91907C11 9.52282 11.4389 9.28402 11.7716 9.49929L18.8512 14.0802C19.1557 14.2772 19.1557 14.7228 18.8512 14.9198L11.7716 19.5007C11.4389 19.716 11 19.4772 11 19.0809Z"
                        fill="black"
                        stroke="black"
                      />
                    </svg>
                    Watch Video
                  </a>
                </div>
                <div className="LetterA">
                  <img src={LetterA} alt="letterA" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 img_grp">
              <figure>
                <img src={Gradient} className="Gradient" alt="gradient" />
                <img src={Phones} className="phone" alt="phones" />
                <img src={Ring} className="ring img-fluid" alt="ring" />
              </figure>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
