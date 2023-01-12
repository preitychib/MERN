import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
const app = express();

app.use("api/user", router);
mongoose
  .connect(
    "mongodb+srv://mernblog:mernblog@cluster0.lgobm9l.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log(
      "Connection to Database is successfull!\n\n Listening at Port 5000."
    )
  )
  .catch((err) => console.log(err));
