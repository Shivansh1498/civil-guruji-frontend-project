import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="error-page">
      <h1>404 Error: Page Not Found</h1>
      <Link to="/">
        <button>Redirect to Home Page</button>
      </Link>
    </main>
  );
};

export default ErrorPage;
