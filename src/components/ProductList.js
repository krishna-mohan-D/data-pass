import React ,{useEffect,useState}from 'react'
import axios from  'axios';
import Product from './Product'
export default function ProductList() {
    const [data , setData] = useState([])

    const Data = async () => { 
        
        const Result =  await axios.get("https://fakestoreapi.com/products")
        console.log('df',Result.data)
         setData( Result.data)
    }
    useEffect(()=> {
        Data();
    },[])

    return (
        <div>
            <Product data={data}/>
        </div>
    )
}
