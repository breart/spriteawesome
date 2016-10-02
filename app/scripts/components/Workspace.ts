/// <reference path="../../../typings/globals/fabricjs/index.d.ts" />

import 'fabric';

/**
 * Workspace is work area for move, drag & drop images
 */
class Workspace {
  canvas: any;

  constructor() {

    this.canvas = new fabric.Canvas('workspace');

    console.log(this.canvas);
  }
}

export { Workspace };