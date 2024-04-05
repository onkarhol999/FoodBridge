import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css'
import userIcon from '../images/DeliveryBoy/user.png';

const DeliveryInfo = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getUsers');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleMoveUser = (userId) => {
        const updatedUsers = users.map(user => {
            if (user._id === userId) {
                return { ...user, completed: true };
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    return (
        <div className='dashboard'>
            <h2>Delivery Information</h2>
            <div className="row">
                <div className="col-lg-4 deliveryIcon">
                    <img src={userIcon} alt="" />
                </div>
                <div className="col-lg-8 deliveryBoyInfo">
                    <h5>Name:</h5> <p>Ramesh Deshmukh</p><br />
                    <h5>Id: </h5> <p>548112</p><br />
                    <h5>no. of delivery: </h5> <p>28</p> <br />
                </div>
            </div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Landmark</th>
                        <th>Food Quantity</th>
                        <th>Description</th>
                        <th>Location Map</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.address}</td>
                            <td>{user.pincode}</td>
                            <td>{user.landmark}</td>
                            <td>{user.quantity}</td>
                            <td>{user.description}</td>
                            <td>
                                <a href={`https://www.google.com/maps/place/${encodeURIComponent(user.pincode)}`} target="_blank" rel="noopener noreferrer">
                                    <img src="https://www.gstatic.com/images/icons/material/system/1x/place_grey600_24dp.png" alt="Google Maps" />
                                </a>
                            </td>
                            <td>
                                <button 
                                    onClick={() => handleMoveUser(user._id)}
                                    disabled={user.completed}
                                    style={{ backgroundColor: user.completed ? 'green' : 'red' }}
                                >
                                    {user.completed ? 'Completed' : 'Task'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeliveryInfo;
