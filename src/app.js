import express, { json } from "express";
import cors from "cors";

const app = express();

/** This is a middleware which is reponsible for who can access the backend server*/

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

/** This is a middleware which will allow JSON  data. I have put 16kb options limit */
app.use(json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

export { app };
