import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../data/home';
import '../styles/hero.css';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // каждые 6 секунд следующий слайд (пауза, когда мышь на блоке)
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current, paused]);

  return (
    <section
      id="hero"
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((slide, i) => (
        <div key={slide.title} className={`hero-slide ${i === current ? 'active' : ''}`}>
          <div
            className="hero-bg"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          <div className="hero-content">
            <span className="badge">Հետաքրքիր փաստ №{i + 1}</span>
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
            <div className="hero-buttons">
              <Link to="/hikes" className="btn">Գտնել արշավ</Link>
              <Link to={`/mountains/${slide.slug}`} className="btn btn-ghost">
                Իմանալ ավելին
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {heroSlides.map((slide, i) => (
          <span
            key={slide.title}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}