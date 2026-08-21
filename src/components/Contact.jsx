function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">

        <p className="section-label">GET IN TOUCH</p>

        <h2>
          Let's Make Your <span>Event Happen.</span>
        </h2>

        <p>
          Need sound, lights or complete event production?
          Get in touch with AUDIOSYNC and let's plan your event.
        </p>

        <div className="contact-buttons">

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

        <div className="contact-info">

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