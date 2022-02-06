import { useDispatch, useSelector } from 'react-redux'
import { filterAction } from '../../store'
import RemoveFilter from '../remove_filter/RemoveFilter'
import Card from '../UI/Card'
import InnerCard from '../UI/InnerCard'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    const filter = useSelector(state=>state);
    const dispatch = useDispatch();

    const productFilterHandler = (event) => {
        const productvalue = event.target.value;
        dispatch(filterAction.applyProductFilter(productvalue));
    }
    
    const stateFilterHandler = (event) => {
        const statevalue = event.target.value;
        dispatch(filterAction.applyStateFilter(statevalue));
    }
    
    const cityFilterHandler = (event) => {
        const cityvalue = event.target.value;
        dispatch(filterAction.applyCityFilter(cityvalue));
    }

    return(
        <div>
        <Card className={classes.filter}>
            <div className={classes.title}>Filter</div>
            <div className={classes.line} />
            <div className={classes.container}>
                <InnerCard className={classes.each}>
                    <div>
                    <select onChange={productFilterHandler}>
                    {!filter.product.show && <option value="none" selected disabled hidden>Product</option>}
                        {filter.product.listName.map(item=>{
                            return (<option 
                            key={filter.product.listName.indexOf(item)}
                            value={item}>
                                {item}
                            </option>)
                        })}
                    </select>
                    </div>
                </InnerCard>
                <InnerCard className={classes.each}>
                    <div>
                        <select onChange={stateFilterHandler}>
                        {!filter.state.show && <option value="none" selected disabled hidden>State</option>}
                            {filter.state.listName.map(item=>{
                                return (<option 
                                key={filter.state.listName.indexOf(item)}
                                value={item}>
                                    {item}
                                </option>)
                            })}
                        </select>
                    </div>
                </InnerCard>
                <InnerCard className={classes.each}>
                    <div>
                        <select onChange={cityFilterHandler}>
                            {!filter.city.show && <option value="none" selected disabled hidden>City</option>}
                            {filter.city.listName.map(item=>{
                                return (<option 
                                key={filter.city.listName.indexOf(item)}
                                value={item}>
                                    {item}
                                </option>)
                            })}
                        </select>
                    </div>
                </InnerCard>
            </div>
        </Card>
        {filter.showFilter && <RemoveFilter/>}
        </div>
    )
}

export default Sidebar;