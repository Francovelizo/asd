import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./CredentialEntity";
import Appoinment from "./AppoinmentEntity";

@Entity({name: "users"})
class User {
@PrimaryGeneratedColumn()
id!: number;

@Column()
name!: string;

@Column({unique: true})
email!:string;

@Column()
birthdate!: string;

@Column()
nDni!:number;

@OneToOne(() => Credential)
@JoinColumn({name: "credential_id"})
credential!: Credential;

@OneToMany(() => Appoinment, appoinment => appoinment.user)
appoinmenst!:Appoinment[];
}

export default User;