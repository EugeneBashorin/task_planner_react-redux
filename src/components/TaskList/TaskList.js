import { Task } from "../Task/Task";
import css from "./TaskList.module.css";

//импеортируем хук
import {useSelector} from"react-redux";
//импортируем объект значений фильтра
import { statusFilters } from "../../redux/constants";
import { getStatusFilter, getTasks } from "../../redux/selector";

//фильтруем список задач на выполненные / невыполненные / все;
const getVisibleTasks = (tasks, statusFilter) => {
    switch(statusFilter){
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
}

export const TaskList = () => {
    //get tasks arr from (store) Redux state
    //const tasks = useSelector(state => state.tasks);
    //the same with selector
    const tasks = useSelector(getTasks);

    //get filters value from (store) Redux state
    // const statusFilter = useSelector(state => state.filters.status);
    //the same with selector
    const statusFilter = useSelector(getStatusFilter);

    //found tasks arr to show
    const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};