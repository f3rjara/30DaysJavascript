import './styles/style.scss';
import './styles/main.scss';

/* Imprt Components */
import {Header} from './components/Header';
import {AboutUs} from './components/AboutUs';

const header = Header();
const aboutUs = AboutUs();

document.querySelector('#app').innerHTML = `${header} ${aboutUs}`;
