import { useDispatch } from 'react-redux';
import { filterAction } from '../../store';
import InnerCard from '../UI/InnerCard';
import classes from './ProductItem.module.css';;

const ProductItem = (props) => {
    var string_date = props.item.date;
    var date = new Date(string_date);
    const dispatch = useDispatch();

    dispatch(filterAction.cityFilter(props.item.address.city));
    dispatch(filterAction.stateFilter(props.item.address.state));

    return (
        <InnerCard className={classes.container}>
            <div className={classes.content}>
                <div className={classes.main}>
                    <div className={classes.left}>
                        <img src={props.item.image} alt='product-img'/>
                        <p>{props.item.address.state}</p>
                    </div>
                    <div className={classes.right}>
                        <span className={classes['product-name']}>{props.item.product_name}</span>
                        <span className={classes['brand-name']}>{props.item.brand_name}</span>
                        <span className={classes.price}>${props.item.price}</span>
                        <span className={classes.date}><p>Date : </p>{date.getDate()}:{date.getMonth()}:{date.getFullYear()}</span>
                    </div>
                </div>
                <div className={classes.bottom}>
                    <p>{props.item.discription}</p>
                </div>
            </div>
        </InnerCard>
    );
}

export default ProductItem;


