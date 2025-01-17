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
exports.getAllUsersService = void 0;
const users = [
    {
        id: 1,
        name: "Homero",
        email: "homerohotmail.com",
        birthdate: "1980-01-01",
        nDnie: 123456789,
        credentialsId: 1,
    },
];
let id = 10;
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = users;
    return allUser;
});
exports.getAllUsersService = getAllUsersService;
