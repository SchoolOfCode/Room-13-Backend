import { Router } from "express";
import {
    getTodos,
    createTodos,
} from "../models/todolist.js"

export const router = Router();


router.get("/", async function (req, res){
    const todo = await getTodos();
    res.status(200).json({success: true, payload: todo})
});

router.post("/", async function (req, res){
    const data = req.body
    const newTodo= await createTodos(data)
    res.status(200).json({success: true, payload: newTodo})
})
