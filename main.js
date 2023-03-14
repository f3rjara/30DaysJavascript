import './styles/style.scss';
import './styles/main.scss';

/* Imprt Components */
import {Header} from './components/Header';
import {AboutUs} from './components/AboutUs';
import { Challenges } from './components/Challenges';

const header = Header();
const aboutUs = AboutUs();
const challenges = Challenges();

document.querySelector('#app').innerHTML = `${header} ${aboutUs} ${challenges}`;
