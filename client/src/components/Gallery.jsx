import { useState } from 'react';
import '../styles/gallery.css';

/*
 * To add your own photos:
 * 1. Place images in client/public/images/gallery/
 * 2. Add entries to the `photos` array below
 */
const photos = [
  {
    src: '/images/swampy.jpeg',
    alt: 'Swampy sitting pretty',
    caption: 'Just being adorable',
  },
  {
    src: '/images/swampy.jpeg',
    alt: 'Swampy on an adventure',
    caption: 'Adventure time!',
  },
  {
    src: '/images/swampy.jpeg',
    alt: 'Swampy relaxing',
    caption: 'Lazy Sunday vibes',
  },
  {
    src: '/images/swampy.jpeg',
    alt: 'Swampy with friends',
    caption: 'Making new friends',
  },
  {
    src: '/images/swampy.jpeg',
    alt: 'Swampy exploring',
    caption: 'Exploring the world',
  },
  {
    src: '/images/swampy.jpeg',
    alt: 'Swampy napping',
    caption: 'Nap time is the best time',
  },
];

function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = () =>
    setLightbox((prev) => (prev + 1) % photos.length);
  const goPrev = () =>
    setLightbox((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>

        <div className="gallery__grid">
          {photos.map((photo, index) => (
            <button
              key={index}
              className="gallery__item"
              onClick={() => openLightbox(index)}
            >
              <img src={photo.src} alt={photo.alt} />
              <div className="gallery__overlay">
                <span>{photo.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={closeLightbox}>
              &times;
            </button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={goPrev}>
              &#8249;
            </button>
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              className="lightbox__image"
            />
            <button className="lightbox__nav lightbox__nav--next" onClick={goNext}>
              &#8250;
            </button>
            <p className="lightbox__caption">{photos[lightbox].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
