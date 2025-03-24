import { NextFunction, Request, Response, Router } from "express";
import { loginController } from "../components/user/use-cases/login";

const userRoutes = Router();

userRoutes.post(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    return loginController.handle(request, response, next);
  },
);

export default userRoutes;
