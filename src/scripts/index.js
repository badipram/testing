import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/restaurant-card.js';

const navMenu = document.getElementById('nav-menu');
const navList = document.getElementById('nav-list');

navMenu.addEventListener('click', () => {
    navList.classList.toggle('hidden');
});



