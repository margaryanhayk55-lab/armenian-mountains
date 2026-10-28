
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <button
          type="button"
          className={`burger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Մենյու"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={close}>
            Գլխավոր
          </NavLink>

          <Link to="/#destinations" onClick={close}>
            Տեսարժան վայրեր
          </Link>

          <NavLink to="/hikes" onClick={close}>
            Արշավներ
          </NavLink>

          <NavLink to="/paths" onClick={close}>
            Հայաստանի լեռները
          </NavLink>

          <Link
            to="/#footer"
            className="header-btn"
            onClick={close}
          >
            Կապ <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
