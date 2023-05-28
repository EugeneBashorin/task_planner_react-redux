import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";

//импортируем хук useDispatch() для отправки action в store
import {useDispatch} from "react-redux";
//импортируем задачу из action оповещения store об изменении
import { addTask } from "../../redux/action";

export const TaskForm = () => {

    //Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    
    // Вызываем экшен и передаем аргументом текст задачи для поля payload
    // Отправляем результат - экшен создания задачи
    dispatch(addTask(form.elements.text.value));
    
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};