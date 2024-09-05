"use strict";
//BBDD
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
exports.validateCredentialService = exports.createCredentialService = void 0;
const credentials = [
    { id: 1, username: "Ariel", password: "1234" }
];
let credentialId = 10;
const createCredentialService = (createCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    //* createCredentialDto = { username: "Ariel", password: "1234" }
    const { username, password } = createCredentialDto;
    const newCredential = {
        id: credentialId++,
        username,
        password,
    };
    credentials.push(newCredential);
    return newCredential;
});
exports.createCredentialService = createCredentialService;
const validateCredentialService = (validateCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    //*{ username: "Ariel", password: "1234" }
    const { username, password } = validateCredentialDto;
    //*1 Buscar la credencial
    const foundCrededntial = credentials.find(credential => credential.username === username);
    //*2 verificar que existe username
    if (!foundCrededntial)
        throw new Error("Credenciales Incorrectas"); // * NO EXISTE "username"
    //*3  verificar contraseña
    if (foundCrededntial.password !== password)
        throw new Error("Credenciales Incorrectas"); // constreña incorrecta
    return foundCrededntial.id;
});
exports.validateCredentialService = validateCredentialService;
