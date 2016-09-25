import '../styles/main.scss';
import { fileLoader } from './components/FileLoader';

/**
 * Main application class
 * @author Artem Brezhnev
 */
class App {
  body: HTMLElement;

  constructor() {

    this.body = document.body;
  }
}

let application = new App();

console.log(fileLoader);

// Show greeting for user
// application.showGreeting();