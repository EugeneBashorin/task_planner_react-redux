import {createStore} from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";
// createStore(reducer, preloadedState, enhancer)
    // reducer - функция с логикой изменения состояния Redux. Required
    // preloadedState - начальное состояние приложения. Это должен быть объект той же формы, что и, как минимум, часть состояния. NOT Required
    // enhancer - функция расширения возможностей стора. NOT Required
    // Если не нужно начальное состояние preloadedState, то enhancer передается вторым аргументом. В противном случае - третьим.

// Начальное значение состояния Redux для корневого редюсера, если не передать параметр preloadedState.
// const initialState = {
//     tasks: [
//         { id: 0, text: "Learn HTML and CSS", completed: true },
//         { id: 1, text: "Get good at JavaScript", completed: true },
//         { id: 2, text: "Master React", completed: false },
//         { id: 3, text: "Discover Redux", completed: false },
//         { id: 4, text: "Build amazing apps", completed: false },
//       ],
//       filters: {
//         status: "all",
//       },
// };//Убрали так как создали корневой редьюсер rootReducer => reducer.js(все там)

// используем редюсер который только возвращает полученное состояние
// const rootReducer = (state = initialState, action) => {
//     return state;
// } //Убрали так как появился корневой редьюсер rootReducer => reducer.js(все там)

// add инструменты разработчика
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);