export enum AppointmentStatus{
    ACTIVE = "active",
    CANCELLED = "cancelled",
}


interface IAppoinment {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: AppointmentStatus;
    description: string;
}

export default IAppoinment;

