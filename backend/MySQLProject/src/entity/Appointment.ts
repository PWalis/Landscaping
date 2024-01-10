import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import { User } from "./User"

@Entity()
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    details: string

    @ManyToOne(() => User, (user) => user.appointment)
    user: User
}