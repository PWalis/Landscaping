import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Appointment} from "./entity/Appointment";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "!Monster24",
    database: "test",
    synchronize: true,
    logging: true,
    entities: [User, Appointment],
    migrations: [],
    subscribers: [],
})
