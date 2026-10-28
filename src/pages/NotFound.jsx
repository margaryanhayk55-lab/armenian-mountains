import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="page" style={{ textAlign: 'center' }}>
      <h1 className="page-title">404</h1>
      <p className="page-subtitle" style={{ margin: '0 auto 30px' }}>
        Էջը չի գտնվել։
      </p>
      <Link to="/" className="btn">Վերադառնալ գլխավոր</Link>
    </main>
  );
}