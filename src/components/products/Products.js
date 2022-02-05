import { useEffect, useState } from 'react';
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
    

    useEffect(()=> {
        const fetchProduct = async() =>{
          const response = await fetch('https://assessment-edvora.herokuapp.com/');
          const data = await response.json();
          let brand = groupBy(data, 'brand_name');
          let loadedArray = [];
          for ( const key of Object.keys(brand)){
            loadedArray.push(brand[key]);
          }
          setListOfProduct(loadedArray);
        }
        fetchProduct()
      },[]);
    
    return (
        <div className={classes.container}>
            {listOfProduct && listOfProduct.map((product)=> {
              return <ProductList key={listOfProduct.indexOf(product)} productList={product}/>
            })}
        </div>
    )
}

export default Products;