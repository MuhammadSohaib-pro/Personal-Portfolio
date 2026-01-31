import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../../portfolio";
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
    <div className="mt-8 md:mt-12 flex flex-col items-start md:items-center">
      <div className="flex flex-wrap items-center gap-6 mb-6">
        {picture && (
          <img
            src={picture}
            alt={name}
            className="about__picture rounded-full object-cover border-4 border-primary"
          />
        )}

        <div className="flex flex-col">
          {name && (
            <h1 className="text-7xl font-bold">
              Hi, I am <span className="text-primary">{name}.</span>
            </h1>
          )}

          {role && <h2 className="text-4xl font-semibold mt-5">A {role}.</h2>}
          <p className="text-lg max-w-xl mt-10">
            {description_1 && description_1}
          </p>
          <p className="text-lg max-w-xl mt-4">
            {description_2 && description_2}
          </p>
          <p className="text-lg max-w-xl mt-4">
            {description_3 && description_3}
          </p>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4">
        {resume && (
          <a href={resume} target="_blank">
            <span type="button" className="btn btn--outline">
              Get Resume
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
                className="link hover:text-primary text-foreground font-medium lowercase relative"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                target="_blank"
                className="link hover:text-primary text-foreground font-medium lowercase relative"
              >
                <LinkedInIcon />
              </a>
            )}

            {social.whatsapp && (
              <a
                href={social.whatsapp}
                aria-label="whatsapp"
                target="_blank"
                className="link hover:text-primary text-foreground font-medium lowercase relative"
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
