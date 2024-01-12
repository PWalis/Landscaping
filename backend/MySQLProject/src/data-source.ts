import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Appointment} from "./entity/Appointment";
import "dotenv/config"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: true,
    entities: [User, Appointment],
    migrations: [],
    subscribers: [],
})