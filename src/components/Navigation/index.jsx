import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <header className="nav">
        <div className="nav-links">
          <Link
            to="/">
            <i className="icon fa-solid fa-house"></i>home
          </Link>
          <Link
            to="/Contacto">
            <i className="icon fa-solid fa-book"></i>Contacto
          </Link>
          <Link
            to="*"
            >
          </Link>
        </div>
        <div className="nav-header">
          <div className="nav-title">
          <i className="icon fa-solid fa-cake-candles fa-xl"></i>Happy Cake
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
