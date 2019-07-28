const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const package = require('../package.json');

const options = {
  swaggerDefinition: {
    info: {
      title: package.name,
      description: package.description,
      version: package.version
    },
    basePath: '/'
  },
  apis: ['./routes/index.js']
};

console.log(options);

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/', swaggerUI.serve, swaggerUI.setup(specs));
}
