const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

require("./plugins/db.js")(app);
require("./routes/web/index.js")(app);

app.listen(3000, () => {
  console.log("Express server starting... Port:3000");
});
