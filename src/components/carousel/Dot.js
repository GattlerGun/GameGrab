const Dot = ({ number, currentIndex, setSlides, cloneCount}) => {
    return (
        <li className={`slider__dot ${number + cloneCount === currentIndex ? "slider__dot--active" : ""}`}
        onClick={() => {
            setSlides(number + cloneCount)
        }}>

        </li>
    );
}

export default Dot;