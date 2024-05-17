

import { Home } from './Pages/HomePage/Home/Home'
import QuotePage from './Pages/QuotePage/QuotePge'

import { ReasturentPage } from './Pages/ResturentPage/ReasturentPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import { FoodPage } from './Pages/foodsPage/FoodPage'
import { Layout } from './Pages/Layout/Layout'
import {createBrowserRouter,RouterProvider,  createRoutesFromElements, Route} from "react-router-dom";
function App() {

  //routing 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<Layout/>}>
          <Route path='' element = {<Home/>} />
          <Route path='quote' element = {<QuotePage/>} />
          <Route path='resturents' element = {<ReasturentPage/>}/>
          <Route path='foods' element = {<FoodPage/>}/>
          <Route path='contact' element = {<ContactPage/>}/>
      </Route>
   
    )
  )

  return (
    <>
   
      <RouterProvider router={router}/>
    </>
  )
}

export default App
