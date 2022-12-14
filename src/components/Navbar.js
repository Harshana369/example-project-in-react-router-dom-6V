import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return { color: isActive ? "link active" : "link" };
        }}
      >
        About
      </NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  );
};
export default Navbar;
