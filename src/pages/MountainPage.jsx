import { Link, useParams } from 'react-router-dom';
import { mountains, places } from '../data/mountains';
import { hikes } from '../data/hikes';
import NotFound from './NotFound';
import '../styles/mountain-page.css';

export default function MountainPage() {
  const { slug } = useParams();

  // это место (Гарни и т.д.) или гора?
  const isPlace = places.some((p) => p.slug === slug);
  const list = isPlace ? places : mountains;
  const index = list.findIndex((m) => m.slug === slug);
  const m = list[index];

  if (index === -1) return <NotFound />; // такой страницы нет

  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];
  const base = isPlace ? '/places/' : '/mountains/';
  const relatedHikes = isPlace ? [] : hikes.filter((h) => h.mountain === m.slug);

  // единственное главное фото для места
  const mainImage = m.gallery?.[0];

  // плашки с основной информацией
  const info = m.info || [
    { label: 'Բարձրություն', value: m.height },
    { label: 'Գտնվելու վայրը', value: m.region },
    { label: 'Բարդություն', value: m.level },
    { label: 'Լավագույն սեզոնը', value: m.season },
  ];

  return (
    <main>
      {isPlace ? (
        /* ---------- Вариант для мест: текст + одно фото ---------- */
        <section className="pl-hero">
          <div className="pl-hero-text">
            <Link to="/#destinations" className="mp-back">← Տեսարժան վայրեր</Link>
            <span className="pl-tag">{m.category}</span>
            <h1>{m.name}</h1>
            <p>{m.text}</p>
          </div>

          <div className="pl-gallery">
            <div className="pl-main">
              <div
                className="pl-slide active"
                style={{ backgroundImage: `url('${mainImage}')` }}
              />
            </div>
          </div>
        </section>
      ) : (
        /* ---------- Вариант для гор: большая картинка сверху ---------- */
        <section
          className="mp-hero"
          style={{ backgroundImage: `url('${m.imageBig}')` }}
        >
          <div className="mp-hero-content">
            <Link to="/" className="mp-back">← Գլխավոր</Link>
            <h1>{m.name}</h1>
            <p>{m.text}</p>
          </div>
        </section>
      )}

      <div className="mp-body">
        <div className="mp-info">
          {info.map((item) => (
            <div key={item.label}>
              <small>{item.label}</small>
              <b>{item.value}</b>
            </div>
          ))}
        </div>

        <div className="mp-columns">
          <div className="mp-text">
            <h2>{isPlace ? 'Պատմություն' : `${m.name}ի մասին`}</h2>
            {m.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="mp-facts">
            <h3>Հետաքրքիր փաստեր</h3>
            <ul>
              {m.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Походы на эту гору (только для гор) */}
        {relatedHikes.length > 0 && (
          <div className="mp-hikes">
            <h2>Արշավներ այս լեռան վրա</h2>
            {relatedHikes.map((h) => (
              <Link key={h.id} to="/hikes" className="mp-hike">
                <span>{h.title}</span>
                <span>{h.duration} · {h.level} →</span>
              </Link>
            ))}
          </div>
        )}

        {/* Предыдущая / следующая страница */}
        <div className="mp-nav">
          <Link to={`${base}${prev.slug}`}>← {prev.name}</Link>
          <Link to={`${base}${next.slug}`}>{next.name} →</Link>
        </div>
      </div>
    </main>
  );
}