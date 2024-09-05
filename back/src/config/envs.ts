// src/config/envs.ts
import dotenv from "dotenv";

dotenv.config(); // Esto carga las variables del archivo .env

export const PORT = process.env.PORT || 3002;  // Puerto para el servidor
export const DB_PORT = process.env.DB_PORT || 5432;  // Puerto de la base de datos
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'Creeper555';
export const DB_NAME = process.env.DB_NAME || 'project_53';