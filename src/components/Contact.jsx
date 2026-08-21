import { useEffect, useRef } from "react";

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const elements =
      contactRef.current?.querySelectorAll(".contact-reveal");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-content" ref={contactRef}>

        {/* TITLE */}
        <div className="contact-reveal contact-title">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's Make Your <span>Event Happen.</span>
          </h2>

          <p>
            Need sound, lights or complete event production?
            Get in touch with AUDIOSYNC and let's plan your event.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="contact-buttons contact-reveal contact-delay-1">
          <a
            href="tel:+918446055904"
            className="contact-btn primary"
          >
            📞 Call Us
          </a>

          <a
            href="https://wa.me/918446055904"
            className="contact-btn whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>
        </div>

        {/* CONTACT INFO */}
        <div className="contact-info contact-reveal contact-delay-2">

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+918446055904">
              8446055904
            </a>
          </p>

          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://instagram.com/_audiosync_"
              target="_blank"
              rel="noreferrer"
            >
              @_audiosync_
            </a>
          </p>

          <p>
            <strong>Location:</strong> Goa, India
          </p>

        </div>
      </div>
    </section>
  );
}

export default Contact;