import React from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom';
import Cards from './pages/Cards';
import { productsData } from './api/Api';
import Product from './components/Product';

function App() {

  const Layout =()=>{
    return(
      <div>
        <Header/>
        <ScrollRestoration/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/', 
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          loader:productsData,
        },
        {
          path:'/product/:id',
          element:<Product/>,
        },
        {
          path:'/cart',
          element:<Cards/>
        },
      ]
    }
  ])


  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
