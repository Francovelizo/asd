import cors from "cors";
import express from "express";
import morgan from "morgan";
import indexRouter from "./routes/indexRouter";

const server = express();

// Middleware
server.use(cors());
server.use(express.json()); // Para manejar datos JSON
server.use(express.urlencoded({ extended: true })); // Para manejar datos URL-encoded
server.use(morgan("dev"));
server.use(indexRouter);

// Ruta de prueba
server.get("/", (req, res) => res.send("Bienvenido al himayala!"));


export default server;