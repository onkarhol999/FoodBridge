import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './AdminDashboard.css';

const BarChart = ({}) => {
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
          data: [300, 200, 500],
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
        <div className='c1'> 
          <canvas className="chart-canvas1" ref={barChartRef} />
        </div>
       
        <div>
          <canvas className="chart-canvas2" ref={doughnutChartRef} />
        </div>
     
      </div>
      <table className="data-table">
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
          <tr>
            <td>John Doe</td>
            <td>123 Main St</td>
            <td>12345</td>
            <td>Near Park</td>
            <td>2</td>
            <td>Chicken Curry</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Elm St</td>
            <td>54321</td>
            <td>Near School</td>
            <td>3</td>
            <td>Vegetable Stir Fry</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Elm St</td>
            <td>54321</td>
            <td>Near School</td>
            <td>3</td>
            <td>Vegetable Stir Fry</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Elm St</td>
            <td>54321</td>
            <td>Near School</td>
            <td>3</td>
            <td>Vegetable Stir Fry</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Elm St</td>
            <td>54321</td>
            <td>Near School</td>
            <td>3</td>
            <td>Vegetable Stir Fry</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Elm St</td>
            <td>54321</td>
            <td>Near School</td>
            <td>3</td>
            <td>Vegetable Stir Fry</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Elm St</td>
            <td>54321</td>
            <td>Near School</td>
            <td>3</td>
            <td>Vegetable Stir Fry</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Elm St</td>
            <td>54321</td>
            <td>Near School</td>
            <td>3</td>
            <td>Vegetable Stir Fry</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Elm St</td>
            <td>54321</td>
            <td>Near School</td>
            <td>3</td>
            <td>Vegetable Stir Fry</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Elm St</td>
            <td>54321</td>
            <td>Near School</td>
            <td>3</td>
            <td>Vegetable Stir Fry</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>456 Elm St</td>
            <td>54321</td>
            <td>Near School</td>
            <td>3</td>
            <td>Vegetable Stir Fry</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BarChart;
