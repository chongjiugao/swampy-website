import '../styles/hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bubbles">
        <span className="bubble bubble--1" />
        <span className="bubble bubble--2" />
        <span className="bubble bubble--3" />
        <span className="bubble bubble--4" />
        <span className="bubble bubble--5" />
      </div>

      <div className="hero__content">
        <div className="hero__image-wrapper">
          <img
            src="/images/swampy.jpeg"
            alt="Swampy the crocodile, a cute green plush toy"
            className="hero__image"
          />
          <div className="hero__lily-pad hero__lily-pad--1" />
          <div className="hero__lily-pad hero__lily-pad--2" />
        </div>

        <div className="hero__text">
          <p className="hero__greeting">Hello there! I'm</p>
          <h1 className="hero__title">Swampy</h1>
          <p className="hero__subtitle">
            The cutest crocodile in the world!
          </p>
          <a href="#about" className="hero__cta">
            Get to know me
            <span className="hero__cta-arrow">↓</span>
          </a>
        </div>
      </div>

      <div className="hero__wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
            fill="var(--color-white)"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
