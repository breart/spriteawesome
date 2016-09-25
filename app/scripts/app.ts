import '../styles/main.scss';

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

// Show greeting for user
application.showGreeting();