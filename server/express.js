import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import compress from "compression";
import userRoutes from "./routes/user.routes";
import Template from "./../template";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send(Template());
});
app.use("/", userRoutes);

export default app;
