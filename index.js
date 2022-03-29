const del = require('del');
const { validate } = require('schema-utils');
const path = require('path');

const schema = {
  type: 'object',
  properties: {
    exclude: {
      type: 'string'
    }
  }
};

class Cleandist {
  constructor(options = { exclude: "" }) {
    this.options = options
    validate(schema, options)
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('cleandist', (compilation, callback) => {
      let delFiles = [`${compiler.options.output.path}/**`, `!${compiler.options.output.path}/${this.options.exclude}`];
      console.log(delFiles)
      del(delFiles).then(() => callback())
      // del(delFiles)
      // callback()
      console.log(compilation.assets)
    })
  }
}
module.exports = Cleandist