const app = require("express")();
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");

// initially i build it to run it in top of vercel, so i had to do this hacky way
fs.readdirSync(`${__dirname}/api`).forEach((file) => {
  const routename = file.replace(".js", "");
  if (["docs"].includes(routename)) return;
  app.use(`/${routename}`, require(`${__dirname}/api/${file}`));
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(require("./docs/swagger"))); // swagger-ui-express

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
