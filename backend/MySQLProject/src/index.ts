import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import * as express from "express"
import {Express, Request, Response} from "express"
import "dotenv/config"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "test"
    user.lastName = "test"
    user.email = "useremail@gmail.com"
    user.zipCode = 73082
    user.phoneNumber = 9999
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

    const app: Express = express();
    const port = process.env.PORT || 3000;

// register routes
    app.get("/users", async function (req: Request, res: Response) {
        const users = await AppDataSource.getRepository(User).find()
        res.json(users)
    })

    app.get("/users/:id", async function (req: Request, res: Response) {
        const results = await AppDataSource.getRepository(User).findOneBy({
            id: Number(req.params.id),
        })
        return res.send(results)
    })

    app.post("/users", async function (req: Request, res: Response) {
        const user = await AppDataSource.getRepository(User).create(req.body)
        const results = await AppDataSource.getRepository(User).save(user)
        return res.send(results)
    })

    app.put("/users/:id", async function (req: Request, res: Response) {
        const user = await AppDataSource.getRepository(User).findOneBy({
            id: Number(req.params.id),
        })
        AppDataSource.getRepository(User).merge(user, req.body)
        const results = await AppDataSource.getRepository(User).save(user)
        return res.send(results)
    })

    app.delete("/users/:id", async function (req: Request, res: Response) {
        const results = await AppDataSource.getRepository(User).delete(req.params.id)
        return res.send(results)
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });

}).catch(error => console.log(error))
