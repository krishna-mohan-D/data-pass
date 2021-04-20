import  ALLPRODUCTS from '../ActionTypes'
const initialState = {
    products : []
}
const  listProducts = (state = initialState,{ type , payload}) => {
       console.log('hi reducers',payload)
     switch (type){
         case 'ALLPRODUCTS':
           return   {...state, products: payload}
         default :
            
            return state
     }
} 

export default  listProducts