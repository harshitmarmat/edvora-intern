import Card from '../UI/Card';
import ProductItem from './ProductItem';
import classes from './ProductList.module.css';
import nex from '../../asset/image/nex.png'
import prev from '../../asset/image/prev.png'
import { useState } from 'react';


const ProductList = (props) => {
    const [startIndex,setStartIndex] = useState(0);
    const [endIndex,setEndIndex] = useState(4);
    let heading;
    if(!props.title){
        heading = <div className={classes['product-title']}>{props.productList[0].brand_name}</div>
    }
    if(props.title){
        heading = <div className={classes['product-title']}>{props.message}</div>
    }
    let list = props.productList.slice(startIndex,endIndex);
    console.log(startIndex,endIndex);
   
    const nextHandler = () => {
        console.log('hii');
        setEndIndex(prev=>prev+1);
        setStartIndex(prev=>prev+1);
    }
    const prevHandler = () => {
        setStartIndex(prev=>prev-1);
        setEndIndex(prev=>prev-1);
    }

    console.log(list);
    return(
        <div className={classes.container}>
            {heading}
            <div className={classes.line} />
            <Card className={classes['product-list-container']}>
                {(0<startIndex) && <div>
                    <img className={classes.prevImage} onClick={prevHandler} src={prev} alt='prev'/>
                </div>} 
                {props.productList &&  list.map((product)=>{
                    return <ProductItem key={list.indexOf(product)} item={product}/>
                })}   
                {(props.productList.length>endIndex) && <div>
                    <img className={classes.nextImage} onClick={nextHandler} src={nex} alt='next'/>
                </div>}  
            </Card>
            
        </div>
    );
}

export default ProductList;