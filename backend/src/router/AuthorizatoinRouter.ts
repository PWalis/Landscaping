import { Router } from "express";
import { authorize } from "../controller/AuthorizationController";

export const AuthorizationRouter = Router();

AuthorizationRouter.post("/authorize", authorize);