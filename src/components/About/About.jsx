import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../../portfolio";
import "./About.css";
import { WhatsApp } from "@mui/icons-material";

const About = () => {
  const {
    name,
    role,
    description_1,
    description_2,
    description_3,
    resume,
    social,
    picture,
  } = about;

  return (
    <div className="about center">
      <div className="about__header">
        {picture && <img src={picture} alt={name} className="about__picture" />}

        <div className="about__intro">
          {name && (
            <h1>
              Hi, I am <span className="about__name">{name}.</span>
            </h1>
          )}

          {role && <h2 className="about__role">A {role}.</h2>}
          <p className="about__desc about__desc__one">
            {description_1 && description_1}
          </p>
          <p className="about__desc about__desc__two">
            {description_2 && description_2}
          </p>
          <p className="about__desc about__desc__three">
            {description_3 && description_3}
          </p>
        </div>
      </div>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                target="_blank"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                target="_blank"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}

            {social.whatsapp && (
              <a
                href={social.whatsapp}
                aria-label="whatsapp"
                target="_blank"
                className="link link--icon"
              >
                <WhatsApp />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
