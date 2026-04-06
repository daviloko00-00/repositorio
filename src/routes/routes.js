import { Router } from "express";
import categoriaroutes from "./categoriaRoutes.js";
import produtoRoutes from "./produtoRoutes.js";
import telefoneRoutes from "./telefoneRoutes.js";
produtoRoutes
const routes = Router();

routes.use("/categorias", categoriaroutes)
routes.use("/produtos", produtoRoutes)
routes.use("/telefones", telefoneRoutes)



export default routes;