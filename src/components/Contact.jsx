import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formMessage, setFormMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name === "" || email === "" || message === "") {
      setFormMessage("Veuillez remplir tous les champs.");
      setMessageColor("red");

      setTimeout(() => {
        setFormMessage("");
      }, 10000);

      return;
    }

    setFormMessage("Envoi en cours...");
    setMessageColor("#2563eb");

    emailjs
      .send("service_MRX", "template_3whxp5v", {
        name: name,
        email: email,
        message: message,
      }, "FHBTQ0T9gjuN5KcGL")   //PUBLIC KEY
      .then(() => {
        setFormMessage("Message envoyé avec succès !");
        setMessageColor("green");
        form.reset();

        setTimeout(() => {
          setFormMessage("");
        }, 10000);
      })
      .catch((error) => {
        console.log("ERROR DETAILS:", error);
        setFormMessage("Erreur lors de l'envoi du message.");
        setMessageColor("red");

        setTimeout(() => {
          setFormMessage("");
        }, 10000);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Prêt à commencer ?</h2>

      <p>Contactez-nous dès aujourd’hui pour découvrir notre solution digitale.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Votre nom" />
        <input type="email" name="email" placeholder="Votre email" />
        <textarea name="message" placeholder="Votre message"></textarea>

        {formMessage && (
          <p className="form-message" style={{ color: messageColor }}>
            {formMessage}
          </p>
        )}

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;