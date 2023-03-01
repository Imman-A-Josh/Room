const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

require('./src/routes/user')(app)

app.listen(8080, () => {
  console.log(`server start at http://localhost:8080`);
});
