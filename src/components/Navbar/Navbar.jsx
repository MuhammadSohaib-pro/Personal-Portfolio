import { useContext, useState } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../../contexts/theme";
import { projects, skills, contact, experiences } from "../../portfolio";
import { Button } from "../ui/button";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="flex items-center gap-2 justify-center">
      {/* Mobile Nav */}
      <ul
        className={`${showNavList ? "bg-background mt-24 flex md:hidden flex-col justify-center gap-2 items-center fixed inset-0 w-full h-full z-10" : "hidden"}`}
      >
        {experiences.length ? (
          <li className="ml-6">
            <a
              href="#experiences"
              onClick={toggleNavList}
              className="link hover:text-primary text-foreground font-medium lowercase relative"
            >
              Experiences
            </a>
          </li>
        ) : null}
        {projects.length ? (
          <li className="ml-6">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link hover:text-primary text-foreground font-medium lowercase relative"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="ml-6">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link hover:text-primary text-foreground font-medium lowercase relative"
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="ml-6">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link hover:text-primary text-foreground font-medium lowercase relative"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>
      {/* Desktop Nav */}
      <ul className="hidden md:flex mr-6">
        {experiences.length ? (
          <li className="ml-6">
            <a
              href="#experiences"
              className="link hover:text-primary text-foreground font-medium lowercase relative"
            >
              Experiences
            </a>
          </li>
        ) : null}
        {projects.length ? (
          <li className="ml-6">
            <a
              href="#projects"
              className="link hover:text-primary text-foreground font-medium lowercase relative"
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className="ml-6">
            <a
              href="#skills"
              className="link hover:text-primary text-foreground font-medium lowercase relative"
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="ml-6">
            <a
              href="#contact"
              className="link hover:text-primary text-foreground font-medium lowercase relative"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <Button
        onClick={toggleTheme}
        className={"cursor-pointer hover:text-primary"}
        variant="ghost"
      >
        {themeName === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </Button>

      <Button
        onClick={toggleNavList}
        className={"cursor-pointer hover:text-primary md:hidden"}
        aria-label="toggle navigation"
        variant="secondary"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </Button>
    </nav>
  );
};

export default Navbar;
