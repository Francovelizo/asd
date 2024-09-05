"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController"); // Ajusta la ruta según tu estructura
const router = (0, express_1.Router)();
// Rutas de usuarios
router.get("/users", userController_1.getAllUser); // Ruta para obtener todos los usuarios
router.get("/users/:id", userController_1.getUserById); // Ruta para obtener un usuario por ID
router.post("/users/register", userController_1.register); // Ruta para registrar un nuevo usuario
router.post("/users/login", userController_1.login); // Ruta para iniciar sesión
exports.default = router;
