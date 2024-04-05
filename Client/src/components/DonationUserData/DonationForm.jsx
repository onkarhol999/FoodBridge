import React, { useState } from 'react'; // eslint-disable-line
import '../DonationUserData/DonationForm.css';

export default function Form() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [landmark, setLandmark] = useState("");
    const [contact, setContact] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    


 const collectData = async (e) => {
     e.preventDefault();
     let result = await fetch('http://localhost:4000/',{
        method:'post',
        body: JSON.stringify({name,address,pincode,landmark,contact,quantity,description}),
        headers: {
            'Content-Type': 'application/json'
        },
     });
     result = await result.json;
     localStorage.setItem("user",JSON.stringify(result));
     alert("Form submitted successfully!");
     resetForm(); 
 }
 const resetForm = () => {
  setName("");
  setAddress("");
  setPincode("");
  setLandmark("");
  setContact("");
  setQuantity("");
  setDescription("");
}
  return (
    <section className='donationForm'>
      <div className="row">

      
      <div className=' col-lg-4 img'>
        adfasd
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-7">
        <div className='form'>
          <h2 >Donation Form</h2>
          <form onSubmit={collectData}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input  className='form-control' type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Address</label>
                <input className='form-control' type='text'
                value={address}
                onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className='form-label' >Pin Code</label>
                <input className='form-control' type='Number'
                value={pincode}
                onChange={(e)=>setPincode(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Landmark</label>
                <input className='form-control' type='text'
                value={landmark}
                onChange={(e)=>setLandmark(e.target.value)}/>
            </div>
            <div  className='mb-3'>
                <label className='form-label' >Contact Number</label>
                <input className='form-control' type='text'
                value={contact}
                onChange={(e)=>setContact(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Food Quantity</label>
                <input className='form-control' type='Number' placeholder='(in Kg)'
                value={quantity}
                onChange={(e)=>setQuantity(e.target.value)}/>
            </div>
            <div className='mb-3' >
                <label className='form-label' >Description About Food</label>
                <input className='form-control' type='text'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="btncontainer">
              <button id='submitbutton' type='submit'>Submit</button>
            </div>
          </form>
          </div>
        </div>
    </div>
    </section>
  )
}