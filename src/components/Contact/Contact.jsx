import { contact } from "../../portfolio";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section
      className="mt-16 md:mt-20 flex-col gap-3 flex items-center"
      id="contact"
    >
      <h2 className="text-4xl font-bold text-center mb-10 uppercase">
        Contact
      </h2>
      <div className="flex items-center justify-center gap-3">
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
