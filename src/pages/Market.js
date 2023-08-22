import { NavLink } from "react-router-dom";

import { Carousel } from "./../components/carousel/Carousel";
import { FeaturedList } from "./../components/featured/FeaturedList";
import Game from "./../components/games/Game";

import "./styles/market.scss"
import { GameList } from "../components/games/GameList";

const Market = () => {
    return (
        <section className="market">
            <div className="container">
                <div className="market__inner">
                    <div className="market__sliders-box">
                        <div className="market__featured-slider">
                            <h2 className="market__title title">
                                Featured
                            </h2>
                            <Carousel dotted arrow autoplay infinite head={1} tail={1}>
                                {FeaturedList.map((game) => {
                                    return (
                                        <div className="market__featured-slide" key={game.id}>
                                            <NavLink className="market__featured-link">
                                                <Game
                                                    img={game.img}
                                                    title={game.title}
                                                    sale={game.sale}
                                                    pay={game.pay}
                                                />
                                            </NavLink>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                        <div className="market__sale-slider">
                            <h2 className="market__title title">
                                Sale Happening Now
                            </h2>
                            <Carousel dotted arrow infinite head={1} tail={1}>
                                {FeaturedList.map((game) => {
                                    return (
                                        <div className="market__sale-slide" key={game.id}>
                                            <NavLink className="market__sale-link">
                                                <Game
                                                    img={game.img}
                                                    title={game.title}
                                                    sale={game.sale}
                                                    pay={game.pay}
                                                />
                                            </NavLink>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>
                    <div className="market__game-box">
                        <h2 className="market__title title">
                            Games
                        </h2>
                        <ul className="market__games-list">
                            {GameList.map((game) => {
                                return (
                                    <li className="market__games-item" key={game.id}>
                                        <NavLink className="market__featured-link">
                                            <Game
                                                img={game.img}
                                                title={game.title}
                                                sale={game.sale}
                                                pay={game.pay}
                                                text={""}
                                            />
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <aside className="market__filters-box">
                <div className="market__filters-content">
                    <h2 className="filters__title title">Filters</h2>
                </div>
            </aside>
        </section>
    );
}

export default Market;