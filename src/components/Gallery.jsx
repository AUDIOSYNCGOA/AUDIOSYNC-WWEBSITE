function Gallery() {
  const corporateImages = [
    "gallery1.jpeg",
    "gallery3.jpeg",
    "gallery5.jpeg",
    "gallery6.jpeg",
    "gallery8.jpeg",
    "gallery9.jpeg",
  ];

  const weddingImages = [
    "gallery2.jpeg",
    "gallery4.jpeg",
    "gallery7.jpeg",
    "gallery10.jpeg",
  ];

  return (
    <section className="gallery" id="gallery">

      {/* CORPORATE WORKS */}
      <div className="section-title">
        <p className="section-label">OUR CORPORATE WORKS</p>

        <h2>
          Corporate <span>Events</span>
        </h2>

        <p>
          Professional sound, lighting and production setups
          for corporate events and celebrations.
        </p>
      </div>

      <div className="gallery-grid">
        {corporateImages.map((image, index) => (
          <div className="gallery-item" key={image}>
            <img
              src={`/${image}`}
              alt={`AUDIOSYNC corporate event ${index + 1}`}
            />
          </div>
        ))}
      </div>


      {/* WEDDING WORKS */}
      <div className="section-title gallery-section-title">
        <p className="section-label">OUR WEDDING WORKS</p>

        <h2>
          Wedding <span>Events</span>
        </h2>

        <p>
          Beautiful sound, lighting and production setups
          created for weddings and celebrations.
        </p>
      </div>

      <div className="gallery-grid">
        {weddingImages.map((image, index) => (
          <div className="gallery-item" key={image}>
            <img
              src={`/${image}`}
              alt={`AUDIOSYNC wedding event ${index + 1}`}
            />
          </div>
        ))}
      </div>

    </section>
  );
}

export default Gallery;