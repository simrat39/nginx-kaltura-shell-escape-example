const express = require("express");
const shescape = require("shescape");

const app = express();
app.use(express.json());

app.get("/:file", (req, res) => {
  let file = req.params.file.replaceAll(" ", "%20");
  console.log(file);

  let json = {
    sequences: [
      {
        clips: [
          {
            type: "source",
            path: `/${file}`,
          },
        ],
      },
    ],
  };

  res.json(json);
});

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hi from express");
});

app.listen(3030, () => {
  console.log("app started on port 3030");
});
