import express from "express";

const routes = express.Router()

routes.get("/", (request, response) => {
  console.log("Listagem de usuários");
  response.json({ message: 'al'});
});

export default routes;