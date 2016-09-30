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
   * Max file size in KB
   */
  _fileSize: number;

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
   */
  public validate() {

    for(let i = 0; i < this.files.length; i++) {

      if(!this._validateFile(this.files[i])) {

        console.log('Validation failed');

        return false;
      }
    }

    console.log('Validate successful');

    return true;
  }

  /**
   * Validate file
   * @param file
   * @private
   */
  private _validateFile(file: File) {

    // Check file size
    if(file.size > this.fileSize) {

      return false;
    }

    let fileType = /(?:\.([^.]+))?$/.exec(file.name)[1];

    // Check file extension
    return this.fileTypes.indexOf(fileType) !== -1;
  }

  /**
   * Set max upload file size in KB
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