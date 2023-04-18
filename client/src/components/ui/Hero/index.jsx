import { Link } from "react-router-dom";

const Hero = ({
  cover,
  title,
  cName,
  text,
  url,
  heroBtnClass,
  heroBtnText,
}) => {
  return (
    <>
      <div className={cName} style={{ backgroundImage: `url(${cover})` }}>
        <img src={cover} alt={cover} />

        <div className="hero-text">
          <h1>{title}</h1>
          <p>{text}</p>

          <button className={heroBtnClass}>
            <Link to={url}>{heroBtnText}</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
