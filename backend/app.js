import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerJSDoc = YAML.load("./api.yaml");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
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
