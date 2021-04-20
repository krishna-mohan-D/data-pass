import ALLPRODUCTS from '../ActionTypes';

const  getProducts  = (products) => {
        // console.log('hi actions ', products)
     return {type: 'ALLPRODUCTS' , payload: products}
}

export default getProducts