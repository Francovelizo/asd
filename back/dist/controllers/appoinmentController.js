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
exports.cancel = exports.schedule = exports.getAppointments = exports.getAllAppointments = void 0;
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "estas son las citas" });
});
exports.getAllAppointments = getAllAppointments;
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "estos son los usuarios" });
});
exports.getAppointments = getAppointments;
const schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "estos son los usuarios" });
});
exports.schedule = schedule;
const cancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "estos son los usuarios" });
});
exports.cancel = cancel;
