import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64 C360,0 720,120 1080,64 C1260,32 1380,48 1440,64 L1440,120 L0,120 Z"
            fill="var(--color-primary-dark)"
          />
        </svg>
      </div>

      <div className="footer__body">
        <div className="container">
          <div className="footer__content">
            <div className="footer__brand">
              <span className="footer__logo">🐊 Swampy</span>
              <p>The cutest crocodile in the world.<br />Thanks for visiting my little corner of the swamp!</p>
            </div>

            <div className="footer__links">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#gallery">Gallery</a>
              <a href="#funfacts">Fun Facts</a>
              <a href="#guestbook">Guestbook</a>
            </div>
          </div>

          <div className="footer__bottom">
            <p>Made with 💚 for Swampy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
