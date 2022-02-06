import InnerCard from '../UI/InnerCard';
import classes from './ProductItem.module.css';;

const ProductItem = (props) => {
    var string_date = props.item.date;
    var date = new Date(string_date);

    return (
        <InnerCard className={classes.container}>
            <div className={classes.content}>
                <div className={classes.main}>
                    <div className={classes.left}>
                        <img src={props.item.image} alt='product-img'/>
                        <p>City : {props.item.address.city}</p>
                        <p>State : {props.item.address.state}</p>
                    </div>
                    <div className={classes.right}>
                        <span className={classes['product-name']}>{props.item.product_name}</span>
                        <span className={classes['brand-name']}>{props.item.brand_name}</span>
                        <span className={classes.price}>$ {props.item.price}</span>
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


