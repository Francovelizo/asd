"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = exports.getUserById = exports.getAllUser = void 0;
const userService_1 = require("../services/userService");
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield (0, userService_1.getAllUsersService)();
        res.status(200).json(allUsers);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getAllUser = getAllUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "estas son las ID" });
});
exports.getUserById = getUserById;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "estos son los Registros" });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "bienvenido al himalaya" });
});
exports.login = login;
