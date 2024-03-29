import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

try {
  const editor = new Editor();
  // Any additional setup or function calls related to the editor
} catch (error) {
  console.error("Failed to initialize the editor:", error);
  loadSpinner();
}


// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register().then(() => {
    console.log('Service worker registered successfully');
  }).catch((error) => {
    console.error('Service worker registration failed:', error);
  });
};
