import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import { useState } from 'react';
import Users from './Users';
import Create from './Create';
import Update from './Update';
import Read from './Read'
import CreateProduct from './products/CreateProduct';
import ProductsPage from './products/productsPage';
import CreateUser from './users/CreateIstifadeci';
import IstifadeciPage from './users/IstifadeciPage';


function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Users/>}></Route>
        <Route path='/create'  element={<Create/>}></Route>
        <Route path='/read/:id'  element={<Read/>}></Route>
        <Route path='/update/:id'  element={<Update/>}></Route>
        <Route path='/createProduct'  element={<CreateProduct/>}></Route>
        <Route path='/products'  element={<ProductsPage/>}></Route>
        <Route path='/users/createIstifadeciler'  element={<CreateUser/>}></Route>
        <Route path='/istifadeciler'  element={<IstifadeciPage/>}></Route>


      </Routes>
    </BrowserRouter>

  </div>
    
  );
}

export default App;
