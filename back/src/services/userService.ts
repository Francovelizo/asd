import { ICreateUserDto } from "../dtos/ICreateUserDto";
import Credential from "../entities/CredentialEntity";
import User from "../entities/UserEntity";
import { userRepository } from "../repositories/IndexRepository";
import { CreateCredentialService } from "./credentialService";

// Obtener todos los usuarios
export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await userRepository.find({
        relations: ["appointments"],  // Asegúrate de que "appointments" sea el nombre correcto
    });
    return allUsers;
};

// Obtener un usuario por su ID
export const getUserByIdService = async (id: number): Promise<User> => {
    const user: User | null = await userRepository.findOne({
        where: { id },
        relations: ["appointments"],  // Asegúrate de que "appointments" sea el nombre correcto
    });

    if (!user) throw new Error("Usuario inexistente");

    // Retornar directamente el tipo User
    return user;
};

// Crear un nuevo usuario
export const CreateUserService = async (createUserDto: ICreateUserDto): Promise<User> => {
    const { name, email, birthdate, nDni, username, password } = createUserDto;

    // Verificar que el usuario no exista => "email"
    const foundUser: User | null = await userRepository.findOneBy({ email });
    if (foundUser) throw new Error("El email ya se encuentra registrado");

    // Crear la credencial
    const newCredential: Credential = await CreateCredentialService({ username, password });

    // Crear el nuevo usuario con las propiedades requeridas
    const newUser: User = userRepository.create({
        name,
        email,
        birthdate,
        nDni,
    });

    // Asociar la credencial al usuario
    newUser.credential = newCredential;

    // Guardar el nuevo usuario en la base de datos
    await userRepository.save(newUser);
    return newUser;
};

// Encontrar usuario por credencial
export const findUserByCredentialService = async (credentialId: number): Promise<User | null> => {
    const user: User | null = await userRepository.findOne({
        where: { credential: { id: credentialId } },  // Corregir para buscar por el ID de la credencial
    });

    if (!user) throw new Error("Usuario no encontrado");

    return user;
};