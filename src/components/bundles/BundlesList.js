import adventureImg from './../../images/head__img.jpg';
import horrorImg from './../../images/head__img.jpg';
import coopImg from './../../images/head__img.jpg';

const BundlesList = [
    {
        id: '0',
        games: ['1', '2', '3', '4', '5'],
        pay: '10',
        sold: '129',
        img: adventureImg,
        title: 'Adventure bundles',
        text: 'Unleash the adventure',
        time: '3 days left'
    },
    {
        id: '1',
        games: ['3', '4', '1', '2', '3', '4', '5'],
        pay: '200',
        sold: '1500',
        img: horrorImg,
        title: 'Horror bundles',
        text: 'Pull on the strings of the nerve',
        time: '5 days left'
    },
    {
        id: '2',
        games: ['5', '6'],
        pay: '59',
        sold: '4032',
        img: coopImg,
        title: 'Co-op bundles',
        text: 'Team up for fun',
        time: '1 days left'
    },
]

export {BundlesList}