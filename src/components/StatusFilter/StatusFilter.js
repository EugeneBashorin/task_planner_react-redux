import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";

//useSelector для получения state из store
//useDispatch для отправки action в store
import {useSelector, useDispatch} from "react-redux";

//import obj of filter's value
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selector";
import { setStatusFilter } from "../../redux/action";

export const StatusFilter = () => {
    //get value of filter from (store)Redux
    //const filter = useSelector(state => state.filters.status)
    //the same with selector
    const filter = useSelector(getStatusFilter);
    //Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();

    const handleFilterChange = filter => dispatch(setStatusFilter(filter))

  return (
    <div className={css.wrapper}>
      <Button 
          selected={filter === statusFilters.all} 
          onClick={()=>handleFilterChange(statusFilters.all)}
      >All</Button>
      <Button 
          selected={filter === statusFilters.active}
          onClick={()=>handleFilterChange(statusFilters.active)}
      >Active</Button>
      <Button 
          selected={filter === statusFilters.completed}
          onClick={()=>handleFilterChange(statusFilters.completed)}
      >Completed</Button>
    </div>
  );
};
