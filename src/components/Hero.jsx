function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <div className="logo">AUDIOSYNC</div>

                <div className="tagline">
                    SOUND • LIGHTS • PRODUCTION
                </div>

                <h1>
                    Your Event
                    <br />
                    <span>Our Production</span>
                </h1>

                <p>
                    Premium sound, lighting and complete event production
                    for weddings, corporate events, concerts, parties and
                    celebrations across Goa.
                </p>

                <div className="buttons">
                    <a href="#gallery" className="btn primary">
                        View Our Work
                    </a>

                    <a
                        href="https://wa.me/918446055904?text=Hi%20AUDIOSYNC,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20event."
                        className="btn secondary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Get a Quote
                    </a>
                </div>

            </div>

        </section>
    );
}

export default Hero;