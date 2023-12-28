import express, { Request, Response } from "express";

const routes = (app: any) => {
    app.route("/").get((req: Request, res: Response) => {
    res.status(200).send({ title: "Home page Test Json" });
  });

  app.use(express.json());
}

export default routes;