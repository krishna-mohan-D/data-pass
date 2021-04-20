import  {combineReducers} from 'redux';
import listProducts from './ProductReducers'


const data = combineReducers({
    Products: listProducts
})

export default  data ;