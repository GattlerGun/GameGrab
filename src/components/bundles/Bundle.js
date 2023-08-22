

const Bundle = ({ games, pay, sold, img, title, text, time }) => {
    return (
        <li className="bundles__item shadow">
            <div className="bundles__info">
                <h4 className="bundles__info-title title">
                    Grab What You Want
                </h4>
                <p className="bundles__games">
                    Get {games.map((game, index) => {
                        if (index + 1 <= 5) {
                            return game + ((index + 1) < games.length &&
                                (index + 1) !== 5 ? ", " : "")
                        }
                        return index + 1 > 6 ? "" : " and more"

                    })}
                </p>
                <ul className="bundles__info-list">
                    <li className="bundles__info-item">
                        {games.length} Items
                    </li>
                    <li className="bundles__info-item">
                        {pay}$ Value
                    </li>
                    <li className="bundles__info-item">
                        Sold {sold}
                    </li>
                </ul>
            </div>
            <img className="bundles__img" src={img} alt={title} />
            <div className="bundles__text-box" >
                <p className="bundles__text">
                    {text}
                </p>
                <div className="bundles__time">
                    {time}
                </div>
            </div>
        </li>
    );
}

export default Bundle;