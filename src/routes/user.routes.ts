import { NextFunction, Request, Response, Router } from "express";
import { loginController } from "../components/user/use-cases/login";

const userRoutes = Router();

userRoutes.post("/", (req: Request, res: Response, next: NextFunction) => {
  async (req: Request, res: Response, next: NextFunction) => {
    return loginController.handle(req, res, next);
  }
});

export default userRoutes;