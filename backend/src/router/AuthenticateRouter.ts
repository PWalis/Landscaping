import { Router } from "express";
import { login } from "../controller/LoginController";
import { deleteAllAdmins, registerAdmin } from "../controller/RegisterController";

export const LoginRouter = Router();

LoginRouter.post("/login", login)
LoginRouter.post("/register", registerAdmin)
LoginRouter.delete("/deleteAllAdmins", deleteAllAdmins)

module.exports = { LoginRouter };