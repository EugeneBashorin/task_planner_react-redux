import { MdClose } from "react-icons/md";
import css from "./Task.module.css";

//импортируем хук useDispatch() для отправки action в store
import { useDispatch } from "react-redux";
//импортируем задачу из action оповещения store об изменении
import { deleteTask, toggleCompleted } from "../../redux/action";

export const Task = ({ task }) => {

//Получаем ссылку на функцию отправки экшенов
const dispatch = useDispatch();
// Вызываем экшен и передаем аргументом id задачи для поля payload
// Отправляем результат - экшен удаления задачи
const handleDelete = () => dispatch(deleteTask(task.id));
// Вызываем экшен и передаем аргументом id задачи для поля payload
// Отправляем результат - экшен переключения статуса задачи
const handleToggle = () => dispatch(toggleCompleted(task.id))

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};