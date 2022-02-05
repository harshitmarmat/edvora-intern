import { useSelector } from 'react-redux'
import Card from '../UI/Card'
import InnerCard from '../UI/InnerCard'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    const filter = useSelector(state=>state);
    //Use For loop
    console.log(filter.product);
    console.log(filter.state);
    console.log(filter.city);
    return(
        <Card className={classes.filter}>
            <div className={classes.title}>Filter</div>
            <div className={classes.line} />
            <div className={classes.container}>
                <InnerCard className={classes.each}>
                    <div>
                    <select>
                        {filter.product.map(item=>{
                            return (<option 
                            key={filter.product.indexOf(item)}
                            value={item}>
                                {item}
                            </option>)
                        })}
                    </select>
                    </div>
                </InnerCard>
                <InnerCard className={classes.each}>
                    <div>
                        <select>
                        {filter.state.map(item=>{
                            return (<option 
                            key={filter.state.indexOf(item)}
                            value={item}>
                                {item}
                            </option>)
                        })}
                        </select>
                    </div>
                </InnerCard>
                <InnerCard className={classes.each}>
                    <div>
                        <select>
                        {filter.city.map(item=>{
                            return (<option 
                            key={filter.city.indexOf(item)}
                            value={item}>
                                {item}
                            </option>)
                        })}
                        </select>
                    </div>
                </InnerCard>
            </div>
        </Card>
    )

}

export default Sidebar;