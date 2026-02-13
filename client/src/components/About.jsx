import '../styles/about.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Swampy</h2>

        <div className="about__card">
          <div className="about__image-col">
            <img
              src="/images/swampy.jpeg"
              alt="Swampy sitting and smiling"
              className="about__image"
            />
          </div>

          <div className="about__text-col">
            <h3>The Friendliest Croc You'll Ever Meet</h3>
            <p>
              Swampy is a lovable little crocodile with a big heart and an even
              bigger smile. With soft green scales and a warm cream belly, Swampy
              spends most days lounging around, going on cozy adventures, and
              making new friends wherever he goes.
            </p>
            <p>
              Despite being a crocodile, Swampy wouldn't hurt a fly. His hobbies
              include sunbathing, collecting smooth pebbles, splashing in
              puddles, and giving the best hugs in the swamp.
            </p>
            <p>
              If you ever need a friend who's always ready to listen, share a
              snack, or go on a spontaneous adventure — Swampy's your croc!
            </p>

            <div className="about__traits">
              <span className="about__trait">Friendly</span>
              <span className="about__trait">Adventurous</span>
              <span className="about__trait">Cuddly</span>
              <span className="about__trait">Snack Lover</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
