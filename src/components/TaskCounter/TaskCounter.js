import css from "./TaskCounter.module.css";
//import hook
import { useSelector } from "react-redux";

export const TaskCounter = () => {

    // get tasts from (store) Redux state
    const tasks = useSelector(state => state.tasks);
    
    //count tasks from Redux state with active / completed status
    const count = tasks.reduce(
        (acc, task) => {
            if(task.completed){
                acc.completed +=1;
            }else{
                acc.active =+1;
            }
            return acc;
        },
        {active: 0, completed: 0}
    )
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
