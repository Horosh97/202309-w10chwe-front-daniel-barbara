import { NavLink } from "react-router-dom";

const Header = (): React.ReactElement => {
  return (
    <div className="header">
      <h1 className="header__title">ROBOTS</h1>
      <ul className="header__navigation">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-robot">Create Robot</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
