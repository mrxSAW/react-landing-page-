function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Prêt à commencer ?</h2>

      <p>
        Contactez-nous dès aujourd’hui pour découvrir notre solution digitale.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;


