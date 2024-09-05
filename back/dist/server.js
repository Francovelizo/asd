"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const indexRouter_1 = __importDefault(require("./routes/indexRouter"));
const server = (0, express_1.default)();
// Middleware
server.use((0, cors_1.default)());
server.use(express_1.default.json()); // Para manejar datos JSON
server.use(express_1.default.urlencoded({ extended: true })); // Para manejar datos URL-encoded
server.use((0, morgan_1.default)("dev"));
server.use(indexRouter_1.default);
// Ruta de prueba
server.get("/", (req, res) => res.send("Bienvenido al himayala!"));
exports.default = server;
