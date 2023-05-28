//объявления экшенов приложения
//action — объекты, которые передают данные из компонентов в стор, тем самым сигнализируя о том, какое событие произошло в интерфейсе. Они являются единственным источником информации для стора
import {nanoid} from "nanoid";

export const addTask = text => {
    return{
        type:"task/addTask",
        payload:{
            id: nanoid(),
            completed: false,
            text,
        },
    };
};

export const deleteTask = taskId => {
    return{
        type: "task/deleteTask",
        payload: taskId,
    };
};

export const toggleCompleted = taskId => {
    return{
        type: "task/toggleCompleted",
        payload: taskId,
    };
};

export const setStatusFilter = (value) => {
    return{
        type: "filters/setStatusFilter",
        payload: value,
    }
}