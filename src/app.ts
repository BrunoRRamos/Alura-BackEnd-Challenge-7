import asyncErrors from "./middleware/http-async-errors"; 
import express from "express";
import routes from "./routes/routes";

const app = express();

routes(app);
asyncErrors(app);

export default app;
