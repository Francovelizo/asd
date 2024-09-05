import { Request, Response } from "express";
import { CreateUserService, findUserByCredentialService, getAllUsersService, getUserByIdService } from "../services/userService";
import { ICreateUserDto } from "../dtos/ICreateUserDto";
import ICreateCredentialDto from "../dtos/ICreateCredentialsDto";
import { validateCredentialService } from "../services/credentialService";
import User from "../entities/UserEntity";

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const allUsers: User[] = await getAllUsersService();
        res.status(200).json(allUsers);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getUserById = async (req: Request<{ id: string }, {}, {}>, res: Response) => {
    try {
        const id = Number(req.params.id);
        const user: User = await getUserByIdService(id);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const register = async (req: Request<{}, {}, ICreateUserDto>, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;

        const newUser: User = await CreateUserService({
            name,
            email,
            birthdate,
            nDni, // Asegúrate de que el nombre de la propiedad coincida
            username,
            password,
        });

        res.status(200).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};



export const login = async (req: Request<{}, {}, ICreateCredentialDto>, res: Response) => {
    try {
        const { username, password } = req.body;

        // Validar usuario
        const credentialId = await validateCredentialService({ username, password });

        // Buscar datos del usuario
        const user: User | null = await findUserByCredentialService(credentialId);

        // Verificar si el usuario no fue encontrado
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Respuesta exitosa
        res.status(200).json({ login: true, user });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
