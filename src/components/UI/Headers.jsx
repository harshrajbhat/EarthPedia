import { NavLink } from "react-router-dom";
import { FaGlobeAmericas, FaInfoCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";

export const Headers = () => {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/" className="logo-link">
              <h1>
                <FaGlobeAmericas style={{ marginRight: "8px", verticalAlign: "middle", marginBottom: "5px"  }} />
                EarthPedia
              </h1>
            </NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <AiFillHome style={{ marginRight: "5px", verticalAlign: "middle", marginBottom: "5px"  }} />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <FaInfoCircle style={{ marginRight: "5px", verticalAlign: "middle", marginBottom: "5px"  }} />
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/country">
                  <GiEarthAmerica style={{ marginRight: "5px", verticalAlign: "middle", marginBottom: "5px" }} />
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <MdContactMail style={{ marginRight: "5px", verticalAlign: "middle", marginBottom: "5px"  }} />
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
