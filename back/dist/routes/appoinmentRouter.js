"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appoinmentController_1 = require("../controllers/appoinmentController");
const userRouter_1 = __importDefault(require("./userRouter"));
const appoinmentRouter = (0, express_1.Router)();
appoinmentRouter.get("/", appoinmentController_1.getAllAppointments);
appoinmentRouter.get("id", appoinmentController_1.getAppointments);
appoinmentRouter.post("/schedule", appoinmentController_1.schedule);
appoinmentRouter.post("/cancel/:turn_id", appoinmentController_1.cancel);
exports.default = userRouter_1.default;
