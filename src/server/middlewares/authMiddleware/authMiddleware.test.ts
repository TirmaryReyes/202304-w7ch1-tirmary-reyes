import jwt from "jsonwebtoken";
import { type Response, type Request } from "express";
import { auth } from "./authMiddleware";

describe("Given an authMiddleware", () => {
  describe("When it receives an authorization header with token and a next function", () => {
    test("The it should call the received function", () => {
      const token = "token header";
      const req: Pick<Request, "headers"> = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const res = {};

      const next = jest.fn();

      jwt.verify = jest.fn();

      auth(req as Request, res as Response, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
