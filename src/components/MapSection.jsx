import "./MapSection.scss";

function MapSection() {
  return (
    <section className="mapSection">
      <div className="mapSection__content">
        <h2 className="mapSection__title">Où nous trouver</h2>
        <p className="mapSection__text">
          Venez découvrir notre établissement dans un cadre chaleureux.  
          Nous sommes idéalement situés, facilement accessibles en transport 
          et proches des commerces du centre-ville.
        </p>
      </div>

      <div className="mapSection__mapWrapper">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.4209791182463!2d6.022771376690973!3d46.24421407911668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ab7f3c1b79%3A0x7bfe7f4ad94837d4!2sSaint-Genis-Pouilly!5e0!3m2!1sfr!2sfr!4v1696851442900!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;
