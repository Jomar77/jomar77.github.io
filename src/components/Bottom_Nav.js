
import { BrowserRouter as Router, Route, Routes, useParams, useNavigate } from 'react-router-dom';
const NavArrows = () => {
    const { year } = useParams();
    const navigate = useNavigate();
  
    return (
      <div className="bottom-nav">
        {/* Left Arrow */}
        <button
          onClick={() => {
            if (year > 2021) {
              navigate(`/${Number(year) - 1}`);
            } else {
              navigate('/'); // Go home from /2021
            }
          }}
          disabled={!year} // Only disabled on home page
        >
          ←
        </button>

        <h4>{year || 'Home'}</h4>
  
        {/* Right Arrow */}
        <button
          onClick={() => navigate(`/${Number(year) + 1}`)}
          disabled={year >= 2025}
        >
          →
        </button>
      </div>
    );
  };

  export default NavArrows;