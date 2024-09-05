import { Router } from "express";
import { getAllUser, getUserById, login, register } from "../controllers/userController";
import validateUser from "../middlewares/validateUserMiddleware";

const userRouter = Router();

userRouter.get("/users", getAllUser);
userRouter.get("/user/:id", getUserById);
userRouter.post("/user/register", validateUser, register);
userRouter.post("/user/login", login);
export default userRouter;

