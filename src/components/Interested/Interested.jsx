import { Link } from "react-router-dom";
import "./Interested.css";

function Interested() {
  return (
    <section className="interested">
      <div className="interested-content">
        <h2 className="interested-heading">Interested?</h2>

        {/* Note: Replace with reusable Button component once finalized. */}
        <Link to="/get-involved" className="interested-button">
          Get Involved
        </Link>
      </div>
    </section>
  );
}

export default Interested;