import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const Navbar = () => {
  const { myCart, user, setUser } = useProductContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar-container px-2">
      <h1>
        <Link to="/">Civil Guruji Project</Link>
      </h1>
      {user !== null ? <h3>Welcome, {user.name}</h3> : ""}
      <div className="navbar-container__button-container">
        {user !== null ? (
          <>
            <p>Items in Cart: {myCart.length}</p>
            <Link to="/checkout">
              <button className="cart-btn">Go To Cart</button>
            </Link>
            <button className="cart-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup-btn">Signup</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
