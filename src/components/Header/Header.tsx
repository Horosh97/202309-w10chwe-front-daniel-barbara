import { NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">ROBOTS</h1>
      <ul className="header__navigation">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-robot">Create Robot</NavLink>
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;
