import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { hikes, levels } from '../data/hikes';
import '../styles/hikes.css';

const levelClass = { 'Հեշտ': 'easy', 'Միջին': 'medium', 'Դժվար': 'hard' };

export default function Hikes() {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('Բոլորը');

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase('hy');
    return hikes.filter((h) => {
      const matchLevel = level === 'Բոլորը' || h.level === level;
      const matchText = `${h.title} ${h.region} ${h.level}`.toLocaleLowerCase('hy').includes(q);
      return matchLevel && matchText;
    });
  }, [query, level]);

  return (
    <main className="hikes-page">
      <section className="hikes-intro">
        <div className="hikes-intro-image" />
        <div className="hikes-intro-content">
          <span className="hikes-kicker">ՔՈ ՀԱՋՈՐԴ ԱՐԿԱԾԸ</span>
          <h1>Բացահայտիր Հայաստանը՝ քայլ առ քայլ</h1>
          <p>Ընտրիր քո տեմպին համապատասխան երթուղի, գտիր նոր տեսարաններ և ստեղծիր հիշողություններ, որոնք կմնան քեզ հետ։</p>
          <a href="#hikes-list" className="hikes-scroll-link">Գտնել երթուղի <span>↓</span></a>
        </div>
        <div className="hikes-intro-note"><span>Լեռներ · Բնություն · Արկածներ</span></div>
      </section>

      <section className="hikes-content" id="hikes-list">
        <div className="hikes-section-heading">
          <div>
            <span className="hikes-kicker">ԸՆՏՐԻՐ ՔՈ ՈՒՂԻՆ</span>
            <h2>Արշավային երթուղիներ</h2>
          </div>
          <p>Փոքր քայլից մինչև մեծ վերելք․ այստեղ կգտնես քո հաջորդ ճանապարհորդությունը։</p>
        </div>

        <div className="hikes-toolbar">
          <label className="hikes-search-wrap">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              className="hikes-search"
              placeholder="Որոնել երթուղի կամ մարզ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Որոնել երթուղի կամ մարզ"
            />
            {query && <button type="button" className="clear-search" onClick={() => setQuery('')} aria-label="Մաքրել որոնումը">×</button>}
          </label>
          <div className="hikes-filters" aria-label="Բարդության ֆիլտր">
            {levels.map((item) => (
              <button key={item} type="button" className={`hikes-filter ${level === item ? 'active' : ''}`} onClick={() => setLevel(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="hikes-list-meta"><span>Երթուղիներ՝ <b>{filtered.length}</b></span><span>Հայաստան / Բացահայտիր ավելին</span></div>

        {filtered.length ? (
          <div className="hikes-grid">
            {filtered.map((h, index) => (
              <Link
                key={h.id}
                to={`/hikes/${h.slug}`}
                className="hike-card"
                style={{ '--photo': `url('${h.image}')` }}
              >
                <span className={`hike-level ${levelClass[h.level]}`}>{h.level}</span>

                <div className="hike-card-body">
                  <span className="hike-card-region">⌖ {h.region}</span>
                  <h3>{h.title}</h3>
                  <div className="hike-card-chips">
                    <span>{h.duration}</span>
                    <span>{h.distance}</span>
                    <span>{h.season}</span>
                  </div>
                  <div className="hike-card-link">Տեսնել ավելին <span>↗</span></div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="hikes-empty"><span>⌕</span><h3>Երթուղի չի գտնվել</h3><p>Փորձիր այլ բառ կամ փոխիր բարդության ֆիլտրը։</p><button type="button" onClick={() => { setQuery(''); setLevel('Բոլորը'); }}>Մաքրել ֆիլտրերը</button></div>
        )}
      </section>
      <section className="hikes-bottom-cta">
        <div><span className="hikes-kicker">ՊԱՏՐԱ՞ՍՏ ԵՍ ՃԱՆԱՊԱՐՀԻՆ</span><h2>Քո հաջորդ պատմությունը սկսվում է այստեղից։</h2></div>
        <a href="#footer" className="hikes-cta-button">Կապ հաստատել <span>↗</span></a>
      </section>
    </main>
  );
}