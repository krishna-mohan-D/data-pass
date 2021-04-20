import React from 'react'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'

const { Meta } = Card;


export default function Product() {
    // const  data = useSelector((state) => state.Products.state)
    const data = useSelector((daata) => daata.Products.products)


    console.log("data in" , data)
    
    return (
        
        <div>
                <Row>
                    { data.map((data) => (
                        // data.length === 0 ? 'loading...':
                        <Col span={6}>
                        <Link to={`/products/${data.id}`}>

                        <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={data.image} />}
                        >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                        </Link>

                        </Col>

                    ))}
                </Row>
        </div>
    )
}
