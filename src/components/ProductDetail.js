import React, {useEffect, useState} from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import axios from 'axios';
import {useParams} from 'react-router-dom'

const { Meta } = Card;

export default function ProductDetail() {
    let {productId}   = useParams()
    const [data, setData] = useState([]);
    // console.log('par',productId)
    const Data  = async () => {
               const  Result = await axios.get(`http://fakestoreapi.com/products/${productId}`) 
               .catch((err) => {
                console.log("Err: ", err);
              }); 
            setData(Result.data)
                // console.log('result',Result.data) 
    }

    useEffect(() => {
        Data();

    } , [])
    return (

               <div style={{margin: '40px',}}>
                           {data.length === 0 ? '': 
                           
                           <Row>
                           <Col span={12}>  <Card
                   hoverable
                   style={{ width: 540,marginLeft: '400px' ,marginTop: '40px'}}
                   cover={<img alt="example" height='400px'src={data.image}/>}
                   >
                   <Meta title="" description="" />
                           <h4>{data.title}</h4>
                          <h4>price: {data.price}</h4>
                           <h4>{data.description}</h4>
                      <button>Add to Cart</button>

                   </Card></Col>
                           <Col span={12}>  </Col>
                       </Row>             
                           }
              
            
            </div>
               
    )
}
