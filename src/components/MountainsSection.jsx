import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { mountains } from '../data/mountains';
import '../styles/mountains.css';

function MountainCard({ m, side }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // карточка выезжает, когда появляется на экране
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      to={`/mountains/${m.slug}`}
      className={`mountain-card from-${side} ${visible ? 'visible' : ''}`}
    >
      <div className="mountain-img-wrap">
        <div
          className="mountain-img"
          style={{ backgroundImage: `url('${m.image}')` }}
        />
      </div>
      <div className="mountain-body">
        <span className="mountain-badge">Բարձրություն՝ {m.height}</span>
        <h3>{m.name}</h3>
        <p>{m.text}</p>
        <span className="mountain-more">Կարդալ ավելին →</span>
      </div>
    </Link>
  );
}

// 4 самые высокие горы (top: true в data/mountains.js), от самой высокой к низкой
const topMountains = mountains
  .filter((m) => m.top)
  .sort((a, b) => parseInt(b.height) - parseInt(a.height));

export default function MountainsSection() {
  return (
    <section className="mountains">
      <div className="mountains-head">
        <h2>Հայաստանի վեհաշուք գագաթները</h2>
        <p>Չորս լեգենդար լեռ, որոնցից յուրաքանչյուրն ունի իր պատմությունը և արկածային ոգին։</p>
      </div>

      <div className="mountains-grid">
        {topMountains.map((m, i) => (
          <MountainCard key={m.slug} m={m} side={i % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </section>
  );
}   