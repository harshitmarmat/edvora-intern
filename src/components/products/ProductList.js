import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import ProductItem from './ProductItem';
import classes from './ProductList.module.css';
import { filterAction } from '../../store/index';

const ProductList = (props) => {
    const dispatch = useDispatch();
    dispatch(filterAction.productFilter(props.productList[0].product_name));

    return(
        <div className={classes.container}>
            <div className={classes['product-title']}>{props.productList[0].brand_name}</div>
            <div className={classes.line} />
            <Card className={classes['product-list-container']}>
                  {props.productList &&  props.productList.map((product)=>{
                      return <ProductItem key={props.productList.indexOf(product)} item={product}/>
                  })}       
            </Card>
        </div>
    );
}

export default ProductList;