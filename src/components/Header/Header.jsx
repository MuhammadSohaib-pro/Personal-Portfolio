import { header } from "../../portfolio";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="px-4 container h-24 md:h-32 w-full mx-auto my-0 z-50 bg-accent sticky top-0 md:static md:bg-transparent  flex items-center justify-between">
      <h3 className="text-2xl font-bold">
        {homepage ? (
          <a href={homepage} className="link text-primary relative">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
