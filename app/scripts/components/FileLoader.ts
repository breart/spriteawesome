// Allowed file types
enum FileTypes { PNG, SVG }

/**
 * Class FileLoader provide handling and preparing uploaded files for playground
 */
class FileLoader {

  /**
   * File input element
   */
  input: HTMLInputElement;

  /**
   * File list which updates on every upload event
   */
  files: FileList;

  /**
   * @constructor
   */
  constructor() {

    this.input = <HTMLInputElement> document.getElementById('file-browse');

    // Add callback for change event
    this.input.addEventListener('change', this.handleOpen.bind(this), false);
  }

  /**
   * Handle open file process
   */
  handleOpen() {

    this.files = this.input.files;
  }
}

let fileLoader = new FileLoader();

export { fileLoader };