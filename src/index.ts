import express from "express";
import router from "./routes";

const app = express();
const PORT = 8080;

app.use("/", router);

app.listen(PORT, () => {
  return console.log(
    `Express server is listening at http://localhost:${PORT} 🚀`
  );
});
