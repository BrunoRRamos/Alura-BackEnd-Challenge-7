import { Router } from "express";
import { DepoimentoController } from "./controller/controller";

const router = Router();

router
  .post("/depoimentos", (request, response) => {
    return DepoimentoController.postHandle(request, response);
  })
  .get("/depoimentos/:id", (request, response) => {
    return DepoimentoController.getByIdHandle(request, response);
  })
  .put("/depoimentos/:id", (request, response) => {
    return DepoimentoController.putHandle(request, response);
  })
  .delete("/depoimentos/:id", (request, response) => {
    return DepoimentoController.deleteHandle(request, response);
  });

export default router;
