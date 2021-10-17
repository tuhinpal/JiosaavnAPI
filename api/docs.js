const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(require("../docs/swagger"))); // swagger-ui-express

module.exports = app;
