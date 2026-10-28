import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/home';
import '../styles/destinations.css';

export default function Destinations() {
  const trackRef = useRef(null);

  // кнопки сдвигают ленту на ширину одной карточки
  const scroll = (direction) => {
    const track = trackRef.current;
    const card = track.children[0].offsetWidth + 22;
    track.scrollBy({ left: direction * card, behavior: 'smooth' });
  };

  return (
    <section id="destinations" className="destinations">
      <div className="destinations-top">
        <div>
          <div className="eyebrow">✦ Ճանապարհորդությունը սկսվում է այստեղ</div>
          <h2>
            Բացահայտիր<br />
            <span>Հայաստանը</span>
          </h2>
          <p className="destinations-text">
            Հնագույն տաճարներից մինչև վեհաշուք լեռներ։ Գտիր վայրեր, որոնք
            կմնան քո սրտում ընդմիշտ։
          </p>
        </div>

        <div className="arrows">
          <button onClick={() => scroll(-1)} aria-label="Նախորդ">←</button>
          <button onClick={() => scroll(1)} aria-label="Հաջորդ">→</button>
        </div>
      </div>

      <div className="cards-track" ref={trackRef}>
        {destinations.map((d, i) => (
          <Link
            key={d.slug}
            className="card"
            to={`/places/${d.slug}`}
            style={{ '--photo': `url('${d.photo}')` }}
          >
      
            <div className="card-content">
              <span className="card-category">{d.category}</span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
              <div className="card-link">Ուսումնասիրել վայրը <span>↗</span></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}