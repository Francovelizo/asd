import { Router } from "express";
import { getAllUser, getUserById, register, login } from "../controllers/userController"; // Ajusta la ruta según tu estructura

const router = Router();

// Rutas de usuarios
router.get("/users", getAllUser);               // Ruta para obtener todos los usuarios
router.get("/users/:id", getUserById);          // Ruta para obtener un usuario por ID
router.post("/users/register", register);        // Ruta para registrar un nuevo usuario
router.post("/users/login", login);              // Ruta para iniciar sesión

export default router;