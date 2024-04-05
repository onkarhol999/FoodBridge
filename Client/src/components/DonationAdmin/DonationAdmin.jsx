import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DonationAdmin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getUsers');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Data Table</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Landmark</th>
                        <th>Contact</th>
                        <th>Quantity</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.pincode}</td>
                            <td>{item.landmark}</td>
                            <td>{item.contact}</td>
                            <td>{item.quantity}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonationAdmin;
