import { Router } from "express";
import { cancel, getAllAppointments, getAppointmentsById, schedule } from "../controllers/appoinmentController";
import userRouter from "./userRouter";


const appoinmentRouter = Router();

appoinmentRouter.get("/", getAllAppointments);
appoinmentRouter.get("/:trunId", getAppointmentsById );
appoinmentRouter.post("/schedule", schedule );
appoinmentRouter.post("/cancel/:turn_id", cancel);
export default userRouter;

