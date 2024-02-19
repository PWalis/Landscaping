import * as jwt from "jsonwebtoken";
import { Admin } from "../entity/Admin";
require("dotenv").config();

export const createAccessToken = (body: Admin) => {
    const payload = {
        id: body.id,
        name: body.username,
        exp: Math.floor(Date.now() / 1000) + 60 * 10, // 10 minute,
        role: "admin"
    }
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
};