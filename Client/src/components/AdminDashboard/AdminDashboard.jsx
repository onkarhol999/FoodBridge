import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios'; // Import axios
import userIcon from '../images/DeliveryBoy/user.png';
import './AdminDashboard.css';

const BarChart = () => {
  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  let barChart = null;
  let doughnutChart = null;

  useEffect(() => {
    // Dummy data for the bar chart
    const barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'red',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 1
        }
      ]
    };

    // Dummy data for the doughnut chart
    const doughnutData = {
      labels: ['Donations', 'Expenses', 'Profits'],
      datasets: [
        {
          label: 'Financial Overview',
          data: [500, 400, 100],
          backgroundColor: ['blue', 'green', 'yellow'],
          borderWidth: 1
        }
      ]
    };

    // Create the bar chart
    if (barChartRef.current) {
      if (barChart) {
        barChart.destroy();
      }
      barChart = new Chart(barChartRef.current, {
        type: 'bar',
        data: barData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          layout: {
            padding: {
              right: 20,
              top: 20
            }
          }
        }
      });
    }

    // Create the doughnut chart
    if (doughnutChartRef.current) {
      if (doughnutChart) {
        doughnutChart.destroy();
      }
      doughnutChart = new Chart(doughnutChartRef.current, {
        type: 'doughnut',
        data: doughnutData,
        options: {
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (barChart) {
        barChart.destroy();
      }
      if (doughnutChart) {
        doughnutChart.destroy();
      }
    };
  }, []);

  return (
    <div className='board'>
      <h2 className='headingOf'>Admin Dashboard</h2>
      <div className="chart-container"> 
        <div className='c1 charts'> 
          <canvas className="chart-canvas1" ref={barChartRef} />
        <h2>Monthly Donation</h2>
        </div>
        <div className='charts'>
          <canvas className="chart-canvas2" ref={doughnutChartRef} />
        <h2>Monthly Expences</h2>
        </div>
      </div>
      <DeliveryInfo />
    </div>
  );
};

const DeliveryInfo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      const fetchUsers = async () => {
          try {
              const response = await axios.get('http://localhost:4000/getUsers');
              setUsers(response.data);
          } catch (error) {
              console.error('Error fetching users:', error);
          }
      };

      fetchUsers();
  }, []);

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
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Pincode</th>
                  <th>Landmark</th>
                  <th>Food Quantity</th>
                  <th>Description</th>
                  
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
                      
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
  );
};

export default BarChart;
