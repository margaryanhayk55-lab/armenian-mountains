
import '../styles/footer.css';
import img from '../images/footer_img.png';
export default function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__image"
        src={img}
        alt="Armenian Mountains"
      />
    </footer>
  );
}
