import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import  ProductDetail from './components/ProductDetail'
import {BrowserRouter, Switch, Route}  from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>

           <Switch>
               <Route path ='/'  exact component={ProductList}/>
              <Route path="/products/productId" component={ProductDetail}/>
           </Switch>

        </BrowserRouter>
    </div>
  );
}

export default App;
