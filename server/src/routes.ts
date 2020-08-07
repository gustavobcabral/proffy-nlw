import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsControllers.index);
routes.post("/connections", connectionsControllers.create);

export default routes;

// Request body : Dados para atualizar ou criar um registro
// Route Params: Indentificar qual recurso quero deletar ou editar ('/users/:id')
// Querry Params: Paginação, filtro, ordenação
