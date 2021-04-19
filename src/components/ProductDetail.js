import React, {useEffect} from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import axios from 'axios';
import {useParams} from 'react-router-dom'

const { Meta } = Card;

export default function ProductDetail() {
    let {productId}   = useParams()
    console.log('par',productId)
    const Data  = async () => {
               const  Result = await axios.get(`http://fakestoreapi.com/products/${productId}`) .catch((err) => {
                console.log("Err: ", err);
              }); 
                console.log('result',Result) 
    }

    useEffect(() => {
        Data();
        // console.log('result') 

    } , [])
    return (
        <div>
             <Row>
                <Col span={12}>  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
     >
    <Meta title="Europe Street beat" description="www.instagram.com" />
     </Card></Col>
                <Col span={12}>  </Col>
            </Row>
           
        </div>
    )
}
