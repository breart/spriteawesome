/**
 * Main application class
 * @author Artem Brezhnev
 */
class App {
  body: HTMLElement;

  constructor() {

    this.body = document.documentElement;
  }

  showGreeting() {

    this.body.textContent = 'Hey, world!';
  }
}

let application = new App();

// Show greeting for user
application.showGreeting();