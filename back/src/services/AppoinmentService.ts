import { promises } from "dns";
import IscheduleAppoinmentDto from "../dtos/IScheduleAppoinmentDto";
import Appoinment from "../entities/AppoinmentEntity";
import { AppoinmentRepository, userRepository } from "../repositories/IndexRepository"
import { AppointmentStatus } from "../interfaces/IAppoinment";

export const getAllAppointmentsService = async (): Promise<Appoinment[]> =>{
    const AllAppointments: Appoinment[] = await AppoinmentRepository.find();
    return AllAppointments
}

export const getAppoinmentByService = async (trunId: number) =>{
    const appoinment: Appoinment | null = await AppoinmentRepository.findOneBy({
        id: trunId,
    });
    if(!appoinment) throw new Error ("turno no encontrado");
    return appoinment;
};

export const scheduleAppoinmentService = async (scheduleAppoinmentDto: IscheduleAppoinmentDto):Promise <Appoinment> =>{
const {date, time, description, userId} = scheduleAppoinmentDto;
//verificar q ususario exista:
const user = await userRepository.findOneBy({id: userId});
if(!user) throw new Error(`No se encontró al usuario con id: ${userId}`);

//* 2. Crear nuevo turno:
const newAppointment: Appoinment = AppoinmentRepository.create({
    date, time, description
});

//* 3. Asociar el nuevo turno al usuario:
newAppointment.user = user;

//* 4. Grabar en BBDD:
await AppoinmentRepository.save(newAppointment);

return newAppointment;
}

export const cancelAppoinmentService =  async (turnId: number): Promise<void> => {
const appoinment: Appoinment | null = await AppoinmentRepository.findOneBy({id:turnId});
if(!appoinment) throw new Error("Turno no encontrado");
appoinment.status = AppointmentStatus.CANCELLED;
await AppoinmentRepository.save(appoinment);
}