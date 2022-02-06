import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../../store/index';
import ProductList from './ProductList';
import classes from './Products.module.css'

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
}

const Products = ()=>{
    const [listOfProduct,setListOfProduct] = useState([]); 
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    

    useEffect(()=> {
        const fetchProduct = async() =>{
          const response = await fetch('https://assessment-edvora.herokuapp.com/');
          const data = await response.json();
          let brand = groupBy(data, 'brand_name');
          let loadedArray = [];
          for ( const key of Object.keys(brand)){
            loadedArray.push(brand[key]);
          }
          dispatch(filterAction.productListFilter(loadedArray));
          setListOfProduct(loadedArray);
        }
        fetchProduct();
      },[dispatch]);
      
    return (
        <div className={classes.container}>
            {!state.showFilter && listOfProduct.map((product)=> {
              return <ProductList 
                      title={false} 
                      key={listOfProduct.indexOf(product)} 
                      productList={product}
                    />
            })}
            
            {state.product.show && state.product.arrayProduct.map((product)=> {
              return <ProductList 
                        title={true} 
                        key={state.product.arrayProduct.indexOf(product)} 
                        productList={product}
                        message = {state.product.arrayProduct[0][0].product_name + '  (Filterby Product Name)'}                      
                      />
            })}

            {state.state.show && state.state.arrayProduct.map((product)=> {
              return <ProductList title={true} 
                       key={state.state.arrayProduct.indexOf(product)} 
                       message = {state.state.arrayProduct[0][0].address.state + '  (Filterby State Name)'}                      
                       productList={product}
                      />
            })}

            {state.city.show && state.city.arrayProduct.map((product)=> {
              return <ProductList 
                        title={true} 
                        key={state.city.arrayProduct.indexOf(product)} 
                        message = {state.city.arrayProduct[0][0].address.city + '  (Filterby City Name)'}                      
                        productList={product}
                      />
            })}
        </div>
    )
}

export default Products;