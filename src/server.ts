/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import app from "./app";
import dotenv from "dotenv";
import { ZodError } from "zod";
import { env } from "./env";
import { Unauthorized } from "./errors/Unauthorized";
import { BadRequest } from "./errors/BadRequest";

dotenv.config();

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error instanceof ZodError) {
    return res.status(400).json({
      message: "Validation error.",
      issues: error.format(),
    });
  }

  if (error instanceof Unauthorized) {
    return res.status(401).json({
      message: error.message,
    });
  }

  if (error instanceof BadRequest) {
    return res.status(400).json({
      message: error.message,
    });
  }

  return res.status(500).json({ message: error.message });
});

app.listen(env.PORT, () => {
  console.log("Express connected, port: " + env.PORT);
});


export { app };