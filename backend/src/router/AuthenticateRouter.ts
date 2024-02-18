import { Router } from "express";
import { login } from "../controller/LoginController";
import { registerAdmin } from "../controller/RegisterController";

export const LoginRouter = Router();

LoginRouter.post("/login", login)
LoginRouter.post("/register", registerAdmin)

module.exports = { LoginRouter };