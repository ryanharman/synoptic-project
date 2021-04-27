const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello this is working");
});

app.get("/blogs", (req, res) => {
  console.log("Blogs request incoming");
  db.query(`SELECT * FROM posts`, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.post("/create", (req, res) => {
  const { title, content, datecreated } = req.body;
  db.query(
    `INSERT INTO posts (title, content, datecreated) VALUES ("${title}", "${content}", "${datecreated}")`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
