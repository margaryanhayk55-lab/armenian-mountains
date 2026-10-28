import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { hikes } from '../data/hikes';
import { mountains } from '../data/mountains';
import NotFound from './NotFound';
import '../styles/hike-detail.css';

const levelClass = { 'Հեշտ': 'easy', 'Միջին': 'medium', 'Դժվար': 'hard' };

export default function HikePage() {
  const { slug } = useParams();
  const hike = hikes.find((item) => item.slug === slug);
  const [slide, setSlide] = useState(0);
  const gallery = hike?.gallery?.length ? hike.gallery : [hike?.image].filter(Boolean);
  const total = gallery.length;
  const mountain = hike?.mountain ? mountains.find((item) => item.slug === hike.mountain) : null;
  const related = hikes.filter((item) => item.id !== hike?.id && ((hike?.mountain && item.mountain === hike.mountain) || item.region === hike?.region)).slice(0, 3);

  useEffect(() => {
    setSlide(0);
  }, [slug]);

  useEffect(() => {
    if (total < 2) return undefined;
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % total), 5500);
    return () => clearInterval(timer);
  }, [slug, total]);

  if (!hike) return <NotFound />;

  const description = hike.description || [
    `${hike.title} երթուղին հիանալի հնարավորություն է բացահայտելու Հայաստանի բնությունն ու լեռնային տեսարանները։`,
    'Մեկնելուց առաջ ստուգիր եղանակը, ընտրիր համապատասխան կոշիկ և հագուստ, վերցրու բավարար ջուր և հետևիր ուղեկցորդի խորհուրդներին։',
  ];
  const facts = hike.facts || [
    `Բարդություն՝ ${hike.level.toLocaleLowerCase('hy')}`,
    `Լավագույն սեզոն՝ ${hike.season}`,
    `Տևողություն՝ ${hike.duration}`,
  ];

  const statsList = [
    { label: 'Տևողություն', value: hike.duration },
    { label: 'Հեռավորություն', value: hike.distance },
    { label: 'Լավագույն սեզոն', value: hike.season },
    { label: 'Ազատ տեղեր', value: hike.spots },
  ];

  const prev = () => setSlide((current) => (current - 1 + total) % total);
  const next = () => setSlide((current) => (current + 1) % total);

  return (
    <main className="hike-detail-page">
      {/* Hero */}
      <section className="hike-detail-hero">
        <div className="hike-detail-hero-bg" style={{ backgroundImage: `url('${hike.image}')` }} />
        <div className="hike-detail-hero-content">
          <Link to="/hikes" className="hike-detail-back">← Բոլոր արշավները</Link>
          <span className={`hike-level ${levelClass[hike.level] || ''}`}>{hike.level} բարդություն</span>
          <h1>{hike.title}</h1>
        </div>
      </section>

      {/* Overview & Info Cards */}
      <section className="hike-detail-overview" id="hike-overview">
        <div className="hike-detail-overview-heading">
          <span className="hikes-kicker">ԵՐԹՈՒՂՈՒ ՄԱՍԻՆ</span>
          <h2>Ճանապարհ, որը կհիշես</h2>
          <p>Հավաքիր անհրաժեշտ պարագաները և պատրաստվիր բացահայտելու Հայաստանի մեկ այլ գեղեցիկ անկյուն։</p>
        </div>

        <div className="hike-detail-stats">
          {statsList.map((stat, idx) => (
            <div key={idx} className="hike-stat-card">
              <small>{stat.label}</small>
              <b>{stat.value}</b>
            </div>
          ))}
        </div>
      </section>

      {/* Новая минималистичная галерея */}
      <section className="hike-gallery-section">
        <div className="hike-gallery-header">
          <div>
            <span className="hikes-kicker">ՏԵՍԱՐԱՆՆԵՐ</span>
            <h2>Լուսանկարներ երթուղուց</h2>
          </div>
          <div className="hike-gallery-controls">
            <span className="hike-gallery-counter">
              <strong>{slide + 1}</strong> / {total}
            </span>
            {total > 1 && (
              <div className="hike-gallery-arrows">
                <button type="button" onClick={prev} aria-label="Նախորդ">←</button>
                <button type="button" onClick={next} aria-label="Հաջորդ">→</button>
              </div>
            )}
          </div>
        </div>

        <div className="hike-gallery-frame">
          {gallery.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className={`hike-gallery-slide ${index === slide ? 'active' : ''}`}
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
        </div>

        {total > 1 && (
          <div className="hike-gallery-thumbs">
            {gallery.map((src, index) => (
              <button
                key={`${src}-thumb-${index}`}
                type="button"
                className={`hike-gallery-thumb ${index === slide ? 'active' : ''}`}
                onClick={() => setSlide(index)}
                aria-label={`Լուսանկար ${index + 1}`}
              >
                <div
                  className="hike-thumb-img"
                  style={{ backgroundImage: `url('${src}')` }}
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Description & Facts */}
      <section className="hike-detail-story">
        <div className="hike-story-copy">
          <span className="hikes-kicker">ԲԱՑԱՀԱՅՏԻՐ ԱՎԵԼԻՆ</span>
          <h2>{mountain ? `${mountain.name}ի լեռնային աշխարհը` : 'Արկած՝ Հայաստանի սրտում'}</h2>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {mountain && (
            <Link className="hike-mountain-link" to={`/mountains/${mountain.slug}`}>
              Իմանալ ավելին՝ {mountain.name}ի մասին <span>↗</span>
            </Link>
          )}
        </div>

        <aside className="hike-facts-card">
          <span className="hikes-kicker">ՀԵՏԱՔՐՔԻՐ ՓԱՍՏԵՐ</span>
          <h3>Մինչև ճանապարհ ընկնելը</h3>
          <ul>
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <p className="hike-safety-note">Հիշիր՝ լեռներում անվտանգությունը միշտ առաջին տեղում է։</p>
        </aside>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="hike-related-section">
          <div className="hike-gallery-header">
            <div>
              <span className="hikes-kicker">ՆՈՐ ՈՒՂՂՈՒԹՅՈՒՆՆԵՐ</span>
              <h2>Նմանատիպ երթուղիներ</h2>
            </div>
            <Link to="/hikes" className="hike-all-link">Բոլոր արշավները ↗</Link>
          </div>
          <div className="hike-related-grid">
            {related.map((item, i) => (
              <Link
                to={`/hikes/${item.slug}`}
                className="hike-related-card"
                key={item.id}
                style={{ '--photo': `url('${item.image}')` }}
              >
                <span className="hike-related-number">0{i + 1} / 0{related.length}</span>
                <div className="hike-related-content">
                  <span className="hike-related-region">⌖ {item.region}</span>
                  <h3>{item.title}</h3>
                  <div className="hike-related-chips">
                    <span>{item.duration}</span>
                    <span>{item.level}</span>
                  </div>
                  <div className="hike-related-link">Բացահայտել <span>↗</span></div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="hike-contact-cta">
        <div>
          <span className="hikes-kicker">ՊԱՏՐԱՍՏ ԵՍ ՄԵԿՆԵԼՈՒ՞</span>
          <h2>Պլանավորենք քո արկածը միասին։</h2>
          <p>Կապ հաստատիր մեզ հետ՝ երթուղու մանրամասները քննարկելու համար։</p>
        </div>
        <a href="#footer" className="hike-contact-button">Կապ հաստատել <span>↗</span></a>
      </section>
    </main>
  );
}