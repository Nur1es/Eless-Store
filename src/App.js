import React from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cards from './pages/Cards';

function App() {

  const Layout =()=>{
    return(
      <div>
        <Header/>
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
          element:<Home/>
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
