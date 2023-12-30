import { Router } from "express";
import { DestinoController } from "./controller/controller";

const router = Router();

router
    .post("/destinos", (request, response) => {
        return DestinoController.postHandle(request, response);
    })
    .get("/destinos", (request, response) => {
        return DestinoController.getAllHandle(request, response);
    })
    .get("/destinos/:id", (request, response) => {
        return DestinoController.getByIdHandle(request, response);
    })
    .put("/destinos/:id", (request, response) => {
        return DestinoController.putHandle(request, response);
    })
    .delete("/destinos/:id", (request, response) => {
        return DestinoController.deleteHandle(request, response);
    });

export default router;