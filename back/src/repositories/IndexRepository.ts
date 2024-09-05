import { AppDataSource } from "../config/data-source";
import Appoinment from "../entities/AppoinmentEntity";
import Credential from "../entities/CredentialEntity";
import User from "../entities/UserEntity";

export const credentialReposopry = AppDataSource.getRepository(Credential);
export const userRepository = AppDataSource.getRepository(User);
export const AppoinmentRepository = AppDataSource.getRepository(Appoinment);