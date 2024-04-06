import React from 'react'
import ReactDOM from 'react-dom'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout'
import Home from './components/HomePage/homePage'
import DonationForm from './components/DonationUserData/DonationForm'
import DeliveryBoyForm from './components/DeliveryDashboard/DiliveryDashboard'
import HomePage from './components/HomePage/homePage'
import DeliveryBoy from './components/DeliveryBoyLogin/DeliveryBoyLogin'
import ContactUs from './components/ContactUs/ContactUs'
import AdminDashboard from './components/AdminDashboard/AdminDashboard.jsx'
import ShoppingCategory from './components/ShoppingMain/ShoppingMain.jsx';
import Decorative from './components/ShoppingPages/Decorative.jsx'
import EarthenPots from './components/ShoppingPages/EarthenPots.jsx'
import Edible from './components/ShoppingPages/Edible.jsx';
import Fashion from './components/ShoppingPages/Fashion.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="donation" element={<DonationForm/>} />
    <Route path="delivery" element={<DeliveryBoyForm/>} />
    <Route path="Home" element={<HomePage/>} />
    <Route path="loginDB" element={<DeliveryBoy/>} />
    <Route path="Contact" element={<ContactUs/>} />
    <Route path="ShopCategory" element={<ShoppingCategory/>}/>
    <Route path="decorative" element={<Decorative/>}/>
    <Route path="earthenPots" element={<EarthenPots/>}/>
    <Route path="edible" element={<Edible/>}/>
    <Route path="fashion" element={<Fashion/>}/>
    <Route path="adminDashboard" element={<AdminDashboard/>}/>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
