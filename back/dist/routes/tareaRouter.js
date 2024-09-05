"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tareaRouter = (0, express_1.Router)();
//simulamos base de datos
const tareas = [
    {
        id: 1,
        actividad: "repasar",
        prioridad: 2,
    }
];
let tareaId = 10;
tareaRouter.post("/", (req, res) => {
    console.log(req);
    const { actividad, prioridad } = req.body;
    if (!actividad || !prioridad) {
        res.status(400).json({ message: "faltan datos" });
        return;
    }
    const nuevaTarea = {
        id: tareaId++,
        actividad,
        prioridad,
        // ...req.body,
    };
    tareas.push(nuevaTarea);
    res.status(201).json(tareas);
});
tareaRouter.get("/", (req, res) => {
    res.status(200).json(tareas);
});
tareaRouter.put("/:id", (req, res) => {
    const tareaID = Number(req.params.id);
    const { actividad, prioridad } = req.body;
    if (!actividad && !prioridad) {
        res.status(400).json({ message: "faltan datos" });
        return;
    }
    const tareaEncontrada = tareas.find(tarea => tarea.id === tareaID);
    if (!tareaEncontrada) {
        res.status(400).json({ message: "faltan datos" });
        return;
    }
    if (actividad)
        tareaEncontrada.actividad = actividad;
    if (prioridad)
        tareaEncontrada.prioridad = prioridad;
    res.json(tareaEncontrada);
});
exports.default = tareaRouter;
