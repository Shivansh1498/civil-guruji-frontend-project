import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const Navbar = () => {
  const { myCart } = useProductContext();

  return (
    <nav className="navbar-container px-2">
      <h1>
        <Link to="/">Civil Guruji Project</Link>
      </h1>
      <div className="navbar-container__button-container">
        <p>Items in Cart: {myCart.length}</p>
        <Link to="/checkout">
          <button className="cart-btn">Go To Cart</button>
        </Link>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
