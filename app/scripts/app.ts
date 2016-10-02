import '../styles/main.scss';
import { fileLoader } from './components/FileLoader';
import { Workspace } from './components/Workspace';

/**
 * Main application class
 * @author Artem Brezhnev
 */
class App {
  body: HTMLElement;

  workspace: Workspace;

  constructor() {

    this.body = document.body;

    this.workspace = new Workspace();
  }
}

let application = new App();

console.log(fileLoader);

// Show greeting for user
// application.showGreeting();