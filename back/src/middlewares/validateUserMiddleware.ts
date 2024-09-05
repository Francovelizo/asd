import { Request, Response, NextFunction } from "express"
import { ICreateUserDto } from "../dtos/ICreateUserDto"


const validateUser = (req: Request<{},{}, ICreateUserDto>, res:Response, next: NextFunction) =>{
const {name, email, birthdate, nDni, username, password} = req.body;

try{
if(!name) throw new Error("el campo nombre es obligatorio");
if(typeof name !== "string") throw new Error ("El campo nombre debe ser un string");
} catch(error){
    if (error instanceof Error)
    res.status(400).json({error: error.message})
}


next();
}

export default validateUser;