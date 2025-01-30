import { useParams, useNavigate } from 'react-router-dom';

const Bottom_Nav = () => {
    const { year } = useParams();
    const navigate = useNavigate();

    const handlePrevious = () => {
        const prevYear = parseInt(year) - 1;
        prevYear >= 2021 ? navigate(`/${prevYear}`) : navigate('/');
    };

    const handleNext = () => {
        const nextYear = parseInt(year) + 1;
        nextYear <= 2025 && navigate(`/${nextYear}`);
    };

    return (

        <div>


            {/* Bottom Navigation (ALWAYS VISIBLE) */}
            <div className="bottom-nav">
                <button
                    onClick={handlePrevious}
                    disabled={parseInt(year) === 2021}
                >
                    &#8592; {/* Left Arrow */}
                </button>
                <div className="content">
                    <h4>Current Page: {year}</h4>
                </div>
                <button
                    onClick={handleNext}
                    disabled={parseInt(year) === 2025}
                >
                    &#8594; {/* Right Arrow */}
                </button>
            </div>
        </div>
    );
};

export default Bottom_Nav;