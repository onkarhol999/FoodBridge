import './App.css'
import Navbar from './components/navbar/Navbar'
// import DonationForm from './components/DonationUserData/DonationForm.jsx';
import HomePage from './components/HomePage/homePage.jsx';
import Footer from './components/Footer/Footer.jsx';
// import DeliveryDashboard from './components/DeliveryDashboard/DiliveryDashboard.jsx'


function App() {
  return (
    <>
      <Navbar/>
      <HomePage/>
      {/* <DonationForm/> */}
      {/* <DeliveryDashboard/> */}
      <Footer/>
    </>
  )
}

export default App
