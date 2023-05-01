import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <Link to="/">
      <header className="header">
        <img className="logo" src="./images/SpaceX-Logo.png" alt="Tag Heuer" />
      </header>
    </Link>
  );
};

export default Header;
