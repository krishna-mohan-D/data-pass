import React ,{useEffect,useState}from 'react'
import axios from  'axios';
import Product from './Product'
import {useDispatch , useSelector} from 'react-redux'
import   getProducts  from '../redux/actions/ProductActions'

export default function ProductList() {
    // const [data , setData] = useState([])
     const reduxData = useSelector((daata) => daata.Products.products)
//   setData(reduxData)
     const dispatch = useDispatch()
    const Data = async () => { 
        
        const Result =  await axios.get("http://fakestoreapi.com/products")
        console.log('df',Result.data)
        //  setData( Result.data)

        dispatch(getProducts(Result.data))
    }
    useEffect(()=> {
        Data();
    },[])
    console.log('reduxdata', reduxData)

    return (
        
        <div>
            
            {/* <Product data={data}/> */}
              <Product/>
                       
        </div>
    )
}
