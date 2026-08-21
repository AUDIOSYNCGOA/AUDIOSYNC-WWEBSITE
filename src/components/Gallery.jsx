import { useEffect, useRef, useState } from "react";

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryRef = useRef(null);

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

  const allImages = [
    ...corporateImages,
    ...weddingImages,
  ];

  const images =
    filter === "corporate"
      ? corporateImages
      : filter === "wedding"
      ? weddingImages
      : allImages;

  useEffect(() => {
  const items = galleryRef.current?.querySelectorAll(
    ".gallery-item-wrapper"
  );

  if (!items) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  items.forEach((item) => observer.observe(item));

  return () => observer.disconnect();
}, [filter]);


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

      {/* FILTER BUTTONS */}
      <div className="gallery-filters">

        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "corporate" ? "active" : ""}
          onClick={() => setFilter("corporate")}
        >
          Corporate
        </button>

        <button
          className={filter === "wedding" ? "active" : ""}
          onClick={() => setFilter("wedding")}
        >
          Weddings
        </button>

      </div>

      {/* GALLERY */}
      <div className="gallery-grid" ref={galleryRef}>
        {images.map((image, index) => (
          <div
            className="gallery-item-wrapper"
            key={`${filter}-${image}`}
            style={{ "--delay": `${index * 0.1}s` }}
          >
            <div
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={`/${image}`}
                alt={`AUDIOSYNC event ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <img
            src={`/${selectedImage}`}
            alt="AUDIOSYNC event"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  );
}

export default Gallery;