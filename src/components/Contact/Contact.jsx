import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact__detail">
        <a href={`mailto:${contact.email}`} target="_blank">
          <span type="button" className="btn btn--outline">
            Email me
          </span>
        </a>
        <span type="button" className="btn btn--outline">
          {contact.phone}
        </span>
      </div>
    </section>
  );
};

export default Contact;
