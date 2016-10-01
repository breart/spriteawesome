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
   * Allowed file types
   */
  fileTypes: Array<String>;

  /**
   * Max file size in Kb
   */
  _fileSize: number;

  /**
   * Validation error
   */
  error: string;

  /**
   * @constructor
   */
  constructor() {

    // Maximum uploaded file size
    this.fileSize = 200;

    // Allowed file types
    this.fileTypes = ['jpg', 'jpeg', 'png'];

    this.input = <HTMLInputElement> document.getElementById('file-browse');

    // Add callback for change event
    this.input.addEventListener('change', this.handleOpen.bind(this), false);
  }

  /**
   * Handle open file process
   */
  public handleOpen() {

    this.files = this.input.files;

    // Verify uploaded files
    this.validate();
  }

  /**
   * Validate files
   * @returns {boolean}
   */
  public validate() {

    for(let i = 0; i < this.files.length; i++) {

      if (!this._validateFile(this.files[i])) {

        // Show error
        alert(this.error);

        return false;
      }
    }

    return true;
  }

  /**
   * Validate file
   * @param file
   * @returns {boolean}
   * @private
   */
  private _validateFile(file: File) {

    // Check file size
    if(file.size > this.fileSize) {

      this.error = `${file.name}: file size should not exceed ${(this.fileSize / 1024)} Kb`;

      return false;
    }

    let fileType = /(?:\.([^.]+))?$/.exec(file.name)[1];

    // Check file extension
    if(this.fileTypes.indexOf(fileType) === -1) {

      let extensions = this.fileTypes.join(', ');

      this.error = `${file.name}: only files with these extensions are allowed: ${extensions}`;

      return false;
    }

    return true;
  }

  /**
   * Set max upload file size in Kb
   * @param size
   */
  set fileSize(size: number) {

    this._fileSize = (size * 1024);
  }

  /**
   * @returns {number}
   */
  get fileSize() {

    return this._fileSize;
  }
}

let fileLoader = new FileLoader();

export { fileLoader };