import { NavLink } from "react-router-dom";
import Header from "./../components/header/Header";
import { BundlesList } from "./../components/bundles/BundlesList";
import Bundle from "./../components/bundles/Bundle";
import Game from "./../components/games/Game";
import { GameList } from "./../components/games/GameList";
import { Carousel } from "./../components/carousel/Carousel";
import { FeaturedList } from "../components/featured/FeaturedList";

const Home = () => {
    return (
        <>
            <Header />
            <main className="main">
                <section className="featured">
                    <div className="container">
                        <div className="featured__inner">
                            <h2 className="featured__title title">Featured</h2>
                            <Carousel arrow infinite head={2} tail={2}>
                                {FeaturedList.map((game) => {
                                    return (
                                        <div className="featured__slide" key={game.id}>
                                            <NavLink className="featured__link">
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
                </section>
                <section className="bundles">
                    <div className="container">
                        <div className="bundles__inner">
                            <h2 className="bundles__title title">
                                Bundles
                            </h2>
                            <div className="bundles__box">
                                <ul className="bundles__list">
                                    {BundlesList.map((bundle) => {
                                        return (
                                            <NavLink className='bundles__link' key={bundle.id}>
                                                <Bundle
                                                    games={bundle.games}
                                                    pay={bundle.pay}
                                                    sold={bundle.sold}
                                                    img={bundle.img}
                                                    title={bundle.title}
                                                    text={bundle.text}
                                                    time={bundle.time}
                                                />
                                            </NavLink>
                                        )
                                    })}
                                </ul>
                            </div>
                            <NavLink className="bundles__link-more">View Bundles</NavLink>
                        </div>
                    </div>
                </section>
                <section className="games">
                    <div className="container">
                        <div className="games__inner">
                            <h2 className="games__title title">
                                Games
                            </h2>
                            <div className="games__box">
                                <ul className="games__list">
                                    {GameList.map((game) => {
                                        return (
                                            <NavLink className='games__link' key={game.id}>
                                                <Game
                                                    img={game.img}
                                                    title={game.title}
                                                    sale={game.sale}
                                                    pay={game.pay}
                                                />
                                            </NavLink>
                                        )
                                    })}
                                </ul>
                            </div>
                            <NavLink className="games__link-more" to={"/market"}>View Games</NavLink>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;