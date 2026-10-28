import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { mountains } from '../data/mountains';
import '../styles/paths.css';

const levels = ['Բոլորը', 'Հեշտ', 'Միջին', 'Դժվար'];
const levelClass = { 'Հեշտ': 'easy', 'Միջին': 'medium', 'Դժվար': 'hard' };

// от самой высокой горы к самой низкой
const sorted = [...new Map(mountains.map((mountain) => [
  mountain.slug,
  mountain
])).values()].sort(
  (a, b) => parseInt(b.height, 10) - parseInt(a.height, 10)
);
const pad = (n) => String(n).padStart(2, '0');

export default function Paths() {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('Բոլորը');

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('hy');
    return sorted.filter((m) => {
      const byLevel = level === 'Բոլորը' || m.level === level;
      const byText = !q || `${m.name} ${m.region}`.toLocaleLowerCase('hy').includes(q);
      return byLevel && byText;
    });
  }, [query, level]);

  const reset = () => {
    setQuery('');
    setLevel('Բոլորը');
  };

  return (
    <main className="paths-page">
      <section className="paths-intro">
        <div className="paths-intro-image" />
        <div className="paths-intro-content">
          <span className="paths-kicker">ՄԵՐ ՈՒՂԻՆԵՐԸ</span>
          <h1>Հայաստանի լեռները</h1>
          <p>
            Գագաթներ, հրաբուխներ և լեռնաշղթաներ՝ ամենաբարձրից մինչև ամենասիրվածը։
            Ընտրիր լեռ և իմացիր ամեն ինչ նրա մասին։
          </p>
        </div>
      </section>

      <section className="paths-content">
        <div className="paths-toolbar">
          <label className="paths-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Որոնել լեռը կամ մարզը..."
              aria-label="Որոնել լեռը կամ մարզը"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Մաքրել">×</button>
            )}
          </label>

          <div className="paths-filters" aria-label="Բարդության ֆիլտր">
            {levels.map((item) => (
              <button
                key={item}
                type="button"
                className={`paths-filter ${level === item ? 'active' : ''}`}
                onClick={() => setLevel(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <p className="paths-meta">
          Գտնվեց՝ <b>{filtered.length}</b> լեռ
        </p>

        {filtered.length > 0 ? (
          <div className="paths-grid">
            {filtered.map((m, i) => (
              <Link
                key={m.slug}
                to={`/mountains/${m.slug}`}
                className="path-card"
                style={{ '--photo': `url('${m.image}')` }}
              >
                <span className={`path-level ${levelClass[m.level] || ''}`}>{m.level}</span>

                <div className="path-card-body">
                  <span className="path-card-region">⌖ {m.region}</span>
                  <h3>{m.name}</h3>
                  <div className="path-card-chips">
                    <span>{m.height}</span>
                    <span>{m.season}</span>
                  </div>
                  <div className="path-card-link">Տեսնել ավելին <span>↗</span></div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="paths-empty">
            <h3>Ոչինչ չգտնվեց</h3>
            <p>Փորձիր փոխել որոնումը կամ ընտրել այլ բարդություն։</p>
            <button type="button" onClick={reset}>Մաքրել ֆիլտրերը</button>
          </div>
        )}
      </section>
    </main>
  );
}
