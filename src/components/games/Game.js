const Game = ({ img, title, sale, pay, text }) => {
    return (
        <div className="games__item shadow">
            <img className="games__img" src={img} alt={title} />
            <div className="games__text-box">
                <h4 className="games__game-title title">
                    {title}
                </h4>
                <div className="games__price">
                    <div className="games__sale-box">
                        {sale > 0 ? <div className="games__sale"><p>{text} -{sale * 100}%</p></div> : ""}
                        <div className="games__popup">
                            <div className="games__title-box">
                                <h5 className="games__popup-title title">
                                    Discount Breackdown
                                </h5>
                            </div>
                            <div className="games__popup-text-box">
                                <p className="games__popup-text">
                                    -{sale * 100}% Store Discount
                                </p>
                                <p className="games__popup-discount">
                                    <s>${pay}</s> <span className="games__symbol">&#10150;</span> {pay - (pay * sale)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className="games__pay-btn">
                        {pay - (pay * sale)}$
                    </span>
                </div>
            </div>
        </div>
    );
}
Game.defaultProps = {text: "Sale"}
export default Game;