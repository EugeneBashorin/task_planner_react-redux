//главная логика
//reducer — функция, которая принимает текущее состояние и экшен в качестве аргументов и возвращает новое состояние.
//Определяет, как изменяется состояние приложения в ответ на экшены, отправленные в стор.
//Важно!!! Action описывают только то, что произошло, а не как изменяется состояние приложения.
//(state, action) => nextState
import { statusFilters } from "./constants";

const initialState = {   
    tasks: [
        { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false },
    ],
    filters: {
        status: statusFilters.all,
    },
};

//Используем initialState как значение состояния по умолчанию
export const rootReducer = (state = initialState, action) =>{
// Редюсер различает экшены по значению свойства type
switch (action.type) {
    case "task/addTask":{
        // Нужно вернуть новый объект состояния 
        return{
            //в котором есть все данные существующего состояния (РАСПЫЛЯЕМ)
            ...state,
            //и новый массив задач
            tasks:[
                // в котором есть все существующие задачи (РАСПЫЛЯЕМ)
                ...state.tasks,
                // и объект новой задачи (добавляем к расспыленному массиву задач)
                action.payload,
            ],
        }
    }

    case "task/deleteTask":
        return{
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload),
            //через фильтр проверяем есть ли ID удаляемой задачи
            //если есть, пропускаем этот элемент ("Удаляем" из массива)
        }
    
    case "task/toggleCompleted":
        return{
            ...state,
            tasks: state.tasks.map(task =>{
                if(task.id !== action.payload){
                    return task;
                }
                return{
                    //ВАЖНО сначала распыляем (копия), потом обновляем (изменение в копию)
                    ...task,
                    completed: !task.completed,
                };
              }
            )
        }

    case "filters/setStatusFilter":
        return{
            ...state,
            filters:{
                ...state.filters,
                status: action.payload,
            },
        }

    
    default:
      // Каждый редюсер получает все экшены отправленные в стор.
      // Если редюсер не должен обрабатывать какой-то тип экшена,
      // необходимо вернуть существующее состояние без изменений.
      return state;
  }

}
//Правила редюсеров:
//Нельзя изменять аргументы (state и action). Редюсеры должны только вычислять новое значение состояния на основе этих аргументов.
//Нельзя изменять существующее состояние (state). Вместо этого редюсеры должны делать обновления, копируя существующее состояние и внося изменения в копию.
//Редюсеры не должны выполнять никаких «побочных эффектов». Например, запуск таймера, выполнение HTTP-запроса, изменение значения вне функции или ее аргументов, генерация случайных чисел или строк и т. п.
//Редюсер должен быть чистой функцией. Получая аргументы, он должен вычислить следующее состояние и вернуть его. Никаких побочных эффектов. Никаких мутаций. Только вычисление новой версии состояния.