import "./Hero.scss";

interface IHeroProp {
  image: string;
  text: string;
  imageAlt: string;
}

function Hero({ image, text, imageAlt }: IHeroProp) {
  return (
    <section className="hero">
      <img className="hero-image" src={image} alt={imageAlt} />
      <h2 className="hero-text">{text}</h2>
    </section>
  );
}

export default Hero;
