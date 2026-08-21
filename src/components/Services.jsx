import { useEffect, useRef } from "react";

function Services() {
  const services = [
    {
      icon: "🔊",
      title: "Sound",
      description:
        "Professional PA systems, JBL systems, mixers, microphones, monitors and complete event sound solutions.",
    },
    {
      icon: "💡",
      title: "Lights",
      description:
        "LED PAR cans, sharpies, moving heads, truss systems and complete event lighting.",
    },
    {
      icon: "🎤",
      title: "Production",
      description:
        "Complete event production including LED walls, generators, staging and technical support.",
    },
    {
      icon: "⚡",
      title: "Gensets",
      description:
        "Reliable power solutions with generators for weddings, events and large-scale productions.",
    },
    {
      icon: "🖥️",
      title: "LED Walls",
      description:
        "High-quality LED walls for weddings, concerts, corporate events and stage productions.",
    },
    {
      icon: "🏗️",
      title: "Truss",
      description:
        "Professional truss structures for lighting, LED walls, stages and complete event setups.",
    },
  ];

  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".card-wrapper");

    if (!cards) return;

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

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services">
      <div className="section-title">
        <p className="section-label">WHAT WE OFFER</p>

        <h2>
          Complete Event
          <span> Production</span>
        </h2>

        <p>
          From sound and lighting to staging and power, we provide everything
          needed to make your event unforgettable.
        </p>
      </div>

      <div className="cards" ref={cardsRef}>
        {services.map((service, index) => (
          <div
            className="card-wrapper"
            key={service.title}
            style={{ "--delay": `${index * 0.12}s` }}
          >
            <div className="card">
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;