import React from "react";
import "./Reports.css";

function Reports() {
    const foodItems = [
        { name: "Pizza", orders: 120, revenue: 24000 },
        { name: "Burger", orders: 95, revenue: 14250 },
        { name: "Biryani", orders: 85, revenue: 17000 },
        { name: "Pasta", orders: 60, revenue: 9000 }
    ];

    return (
        <div className="reports-page">
            <h1>Reports & Analytics</h1>
            <p>Overview of restaurant business performance.</p>

            <div className="report-stats">
                <div className="report-card">
                    <h3>Total Revenue</h3>
                    <h2>?64,250</h2>
                    <span>Sample report data</span>
                </div>

                <div className="report-card">
                    <h3>Total Orders</h3>
                    <h2>360</h2>
                    <span>Sample report data</span>
                </div>

                <div className="report-card">
                    <h3>Total Customers</h3>
                    <h2>245</h2>
                    <span>Sample report data</span>
                </div>
            </div>

            <div className="report-table-container">
                <h2>Popular Food Items</h2>
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Food Item</th>
                            <th>Orders</th>
                            <th>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodItems.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.orders}</td>
                                <td>?{item.revenue.toLocaleString("en-IN")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Reports;


