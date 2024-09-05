import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../interfaces/IAppoinment";
import User from "./UserEntity";

@Entity({name : "appoinments"})
class Appoinment {
@PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: string;

    @Column()
    time!: string;

    @Column({default: AppointmentStatus.ACTIVE})
    status!: string;

    @Column()
    description!: string;

    
@ManyToOne(()=> User, user => user.appoinmenst)
@JoinColumn({name: "user_id"})    
user!: User;
    

}

export default Appoinment;

