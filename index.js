const app = require("express")();
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");

fs.readdirSync(`${__dirname}/api`).forEach((file) => {
  const routename = file.replace(".js", "");
  if (["docs"].includes(routename)) return;
  app.use(`/${routename}`, require(`${__dirname}/api/${file}`));
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(require("./docs/swagger"))); // swagger-ui-express

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
