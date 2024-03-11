import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <p>KOD ACIKTIRIR PİZZA, DOYURUR</p>
      <Link to="/OrderPizza" className="btn" data-cy="OrderPage-Button">
        <button>Acıktım</button>
      </Link>
    </div>
  );
}
