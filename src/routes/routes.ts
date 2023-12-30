import express, { Request, Response } from "express";
import routerDepoimentos from "../module/depoimentos/routes";
import { httpCodes } from "../utils/httpCodes";
import cors from "cors";


const routes = (app: any) => {
    app.route("/").get((req: Request, res: Response) => {
    res.status(httpCodes.OK).send({ title: "Home page Test Json" });
  });

  app
  .use(cors())
  .use(express.json())
  .use(routerDepoimentos);
}

export default routes;