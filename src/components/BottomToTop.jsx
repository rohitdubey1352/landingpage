import { useState, useEffect } from "react";

const BottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      Top
    </button>
  );
};

export default BottomToTop;
