import "./footer.scss";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h4>Konbini</h4>
          <p>Épicerie japonaise. 10:00–20:00.</p>
        </div>
        <div>
          <h4>Liens</h4>
          <ul>
            <li><a href="/catalog">Catalogue</a></li>
            <li><a href="/checkout">Commander</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Réseaux</h4>
          <ul className="social"><li><a href="#">Instagram</a></li><li><a href="#">TikTok</a></li></ul>
        </div>
      </div>
      <div className="footer__bar">© {new Date().getFullYear()} Powered by SupaCo | Konbini</div>
    </footer>
  );
}
