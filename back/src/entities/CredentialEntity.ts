import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : "Credentials"})
class Credential{
@PrimaryGeneratedColumn()
    id!: number;
@Column()
    username!: string;
    @Column()
    password!: string;
}

export default Credential;