import { GameList } from "../games/GameList"

const FeaturedList = GameList.filter(game => game.featured === true);
export {FeaturedList}