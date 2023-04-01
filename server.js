const express = require("express");
const path = require("path");
const api = require("./apiRoutes");

const PORT=process.env.PORT || 3000



const app = express();

//Middleware for parsing JSON and urlencoded from data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static('public'));

//Get route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

//get route for note taking page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);