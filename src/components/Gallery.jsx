function Gallery() {
  const images = [
    "gallery1.jpeg",
    "gallery2.jpeg",
    "gallery3.jpeg",
    "gallery4.jpeg",
    "gallery5.jpeg",
    "gallery6.jpeg",
    "gallery7.jpeg",
    "gallery8.jpeg",
    "gallery9.jpeg",
    "gallery10.jpeg",
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="section-title">
        <p className="section-label">OUR WORK</p>

        <h2>
          Events We've <span>Produced</span>
        </h2>

        <p>
          A look at some of the sound, lighting and production
          setups by AUDIOSYNC.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={image}>
            <img
              src={`/${image}`}
              alt={`AUDIOSYNC event production ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;