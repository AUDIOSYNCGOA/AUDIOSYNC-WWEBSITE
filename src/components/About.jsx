import { useEffect, useRef, useState } from "react";

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let current = 0;
        const increment = target / 50;

        const timer = setInterval(() => {
          current += increment;

          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(current));
          }
        }, 30);

        observer.unobserve(element);
      },
      { threshold: 0.5 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [target]);

  return <strong ref={counterRef}>{count}+</strong>;
}

function About() {
  const highlights = [
    { number: 3, label: "Years of Experience" },
    { number: 200, label: "Weddings" },
    { number: 100, label: "Corporate Events" },
    { number: 500, label: "Happy Customers" },
  ];

  return (
    <section className="about" id="about">
      <div className="about-content">

        <div className="about-text">
          <p className="section-label">WHO WE ARE</p>

          <h2>
            About <span>AUDIOSYNC</span>
          </h2>

          <p>
            AUDIOSYNC is a professional sound, lighting and event
            production company based in Goa.
          </p>

          <p>
            From intimate celebrations to large-scale weddings,
            concerts and corporate events, we provide reliable
            equipment and technical production to bring every event
            to life.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => (
            <div className="highlight" key={item.label}>
              <Counter target={item.number} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;