import React, { useState } from 'react'; // eslint-disable-line

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
    <div>
      <form onSubmit={collectData}>
        <h2 >Donation Form</h2>
        <div>
            <label>Name</label>
            <input type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            <label>Address</label>
            <input type='text'
             value={address}
             onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div>
            <label >Pin Code</label>
            <input type='Number'
             value={pincode}
             onChange={(e)=>setPincode(e.target.value)}/>
        </div>
        <div>
            <label>Landmark</label>
            <input type='text'
             value={landmark}
             onChange={(e)=>setLandmark(e.target.value)}/>
        </div>
        <div >
            <label >Contact Number</label>
            <input type='text'
             value={contact}
             onChange={(e)=>setContact(e.target.value)}/>
        </div>
        <div>
            <label>Food Quantity (in Kg)</label>
            <input type='Number'
             value={quantity}
             onChange={(e)=>setQuantity(e.target.value)}/>
        </div>
        <div >
            <label >Description About Food</label>
            <input type='text'
             value={description}
             onChange={(e)=>setDescription(e.target.value)}/>
        </div>
          <button type='submit'>Submit</button>
      </form>
  
    </div>
  )
}