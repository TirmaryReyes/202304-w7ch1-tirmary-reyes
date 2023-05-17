import express from "express";
import morgan from "morgan";
import robotsRouter from "./routers/robotsRouter.js";
import {
  generalError,
  notFoundError,
} from "./middlewares/errorMiddlewares/errorMiddlewares.js";
import { auth } from "./middlewares/authMiddleware/authMiddleware.js";
import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  "https://two02304-w7ch1-tirmary-reyes.onrender.com/",
];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(cors(options));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

app.use("/robots", auth, robotsRouter);

app.use(notFoundError);

app.use(generalError);

export default app;
