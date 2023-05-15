import CustomError from "../../CustomError.js";
import jwt from "jsonwebtoken";
import { type Response, type Request, type NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.header("Authorization");

    if (!authorizationHeader?.includes("Bearer")) {
      const error = new CustomError(401, "Missing token");

      throw error;
    }

    const token = authorizationHeader.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT_SECRET!);

    next();
  } catch (error: unknown) {
    next(error);
  }
};
