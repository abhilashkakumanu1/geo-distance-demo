// swaggerDef.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Geo Distance Demo API",
      version: "1.0.0",
    },
  },
  apis: ["./src/*.ts"], // files containing annotations as above
};

const specs = swaggerJsdoc(options);

module.exports = specs;
