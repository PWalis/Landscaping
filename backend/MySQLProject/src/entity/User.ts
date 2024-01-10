import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Appointment } from "./Appointment";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    phoneNumber: number

    @Column()
    zipCode: number

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointment: Appointment[]

}
