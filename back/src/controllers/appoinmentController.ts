import { Request, Response } from "express";
import Appoinment from "../entities/AppoinmentEntity";
import { 
    cancelAppoinmentService, 
    getAllAppointmentsService, 
    getAppoinmentByService, 
    scheduleAppoinmentService 
} from "../services/AppoinmentService";
import IscheduleAppoinmentDto from "../dtos/IScheduleAppoinmentDto";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const AllAppointments: Appoinment[] = await getAllAppointmentsService();
        res.status(200).json(AllAppointments);
    } catch (error: any) {
        res.status(404).json({ message: error.message, error: error });
    }
};

export const getAppointmentsById = async (req: Request<{ turnId: string }>, res: Response) => {
    const { turnId } = req.params;
    try {
        const appoinment: Appoinment = await getAppoinmentByService(Number(turnId));
        res.status(200).json(appoinment);
    } catch (error: any) {
        res.status(404).json({ message: error.message, error: error });
    }
};

export const schedule = async (req: Request<{}, {}, IscheduleAppoinmentDto>, res: Response) => {
    const { date, time, description, userId } = req.body;
    try {
        const newAppointment = await scheduleAppoinmentService({ date, time, description, userId });
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(404).json({ message: error.message, error: error });
    }
};

export const cancel = async (req: Request<{ turnId: string }>, res: Response) => {
    const { turnId } = req.params; // Desestructuración de turnId
    try {
        await cancelAppoinmentService(Number(turnId));
        res.status(201).json({ message: `turno con id: ${turnId} cancelado` });
    } catch (error: any) {
        res.status(404).json({ message: error.message, error: error });
    }
};
