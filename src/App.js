import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import  ProductDetail from './components/ProductDetail'
import {BrowserRouter, Switch, Route}  from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>

           <Switch>
               <Route path ='/'  exact component={ProductList}/>
              <Route path='/products/:productId' component={ProductDetail}/>
           </Switch>

        </BrowserRouter>
     </Provider>  
    </div>
  );
}

export default App;
