import React from 'react'
import ReactDOM from 'react-dom'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout'
import Home from './components/HomePage/homePage'
import DonationForm from './components/DonationUserData/DonationForm'
import DeliveryBoyForm from './components/DeliveryDashboard/DiliveryDashboard'
import HomePage from './components/HomePage/homePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="donation" element={<DonationForm/>} />
    <Route path="delivery" element={<DeliveryBoyForm/>} />
    <Route path="Home" element={<HomePage/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
