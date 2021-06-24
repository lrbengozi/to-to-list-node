import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Auth"
  );
  next();
});

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        status: "Error",
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      error: "Internal Server Error",
    });
  }
);

app.listen(3000, () => console.log("Server is runing in port 3000"));
