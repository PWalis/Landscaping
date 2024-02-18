import { jwt } from "jsonwebtoken";
import { User } from "../entity/User";
import { Admin } from "../entity/Admin";
require("dotenv").config();

export const createAccessToken = (body: User | Admin) => {
    const bodyAsString = body.toString();
    return jwt.sign(bodyAsString, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
};