import './App.css'
import DeliveryInfo from './components/DeliveryDashboard/DiliveryDashboard'
import DonationAdmin from './components/DonationAdmin/DonationAdmin.jsx';
// import Navbar from './components/navbar/Navbar'
// import DonationForm from './components/DonationUserData/DonationForm.jsx';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <DonationForm/> */}
      <DeliveryInfo/>
      <DonationAdmin/>
    </>
  )
}

export default App
