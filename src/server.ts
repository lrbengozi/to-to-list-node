import express, { request, response } from "express";

const app = express();

app.get("/api/v1/tasks", (request, response) => {
  return response.send("sadasda");
});

app.listen(3000, () => console.log("Server is runing in port 3000"));
