import { Request, Response, NextFunction } from "express";
import "express-async-errors";
import HttpError from "../utils/httpError";
import { httpCodes } from "../utils/httpCodes";

const asyncErrors = (app: any) => {
    app.use((error: HttpError, request: Request, response: Response, next: NextFunction) => {
        response.status(error.status || httpCodes.SERVER_ERROR).json({
            status: "Error",
            message: error.message,
        });
    });
};

export default asyncErrors;
