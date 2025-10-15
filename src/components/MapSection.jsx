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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41979.26657433832!2d2.3150086499999998!3d48.8566969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1739598745690!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;
