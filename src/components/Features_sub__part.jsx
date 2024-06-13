const Features_sub__part = (props) => {
  return (
    <>
      <div className="features_sub__points">
        <div className="sub_heading">
          <figure>
            <img src={props.img} alt="img" />
          </figure>
          <h3 className="text-capitalize">{props.heading}</h3>
        </div>
        <p className="text-capitalize">{props.para}</p>
      </div>
    </>
  );
};

export default Features_sub__part;
