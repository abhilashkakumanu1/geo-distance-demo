import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
  res.send("Hello Readers!");
});

app.listen(PORT, () => {
  return console.log(
    `Express server is listening at http://localhost:${PORT} 🚀`
  );
});