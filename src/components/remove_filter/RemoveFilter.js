import { useDispatch } from "react-redux"
import { filterAction } from "../../store/index";
import Card from "../UI/Card"
import classes from './RemoveFilter.module.css'

const RemoveFilter = () => {
    const dispatch = useDispatch();
    const removeFilterHandler = () => {
        console.log('click');
        dispatch(filterAction.removeFilter());
    }

    return(
        <div onClick={removeFilterHandler}>
            <Card  className={classes.container}>
                <h4 >Remove Filters</h4>
            </Card>
        </div>
    )
}

export default RemoveFilter