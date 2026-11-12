import React, { useState } from "react";
import "./Orders.css";

const initialOrders = [
    { id: 1001, customer: "Rahul", items: "Pizza, Burger", total: 450, status: "Pending" },
    { id: 1002, customer: "Priya", items: "Pasta, Juice", total: 320, status: "Preparing" },
    { id: 1003, customer: "Arjun", items: "Sandwich", total: 180, status: "Delivered" },
    { id: 1004, customer: "Sneha", items: "Biryani, Coke", total: 280, status: "Pending" }
];

function Orders() {
    const [orders, setOrders] = useState(initialOrders);
    const [search, setSearch] = useState("");

    const updateStatus = (id, status) => {
        setOrders(orders.map(order =>
            order.id === id ? { ...order, status } : order
        ));
    };

    const filteredOrders = orders.filter(order =>
        order.customer.toLowerCase().includes(search.toLowerCase()) ||
        String(order.id).includes(search)
    );

    return (
        <div className="orders-page">
            <h1>Order Management</h1>
            <p>View and manage customer food orders.</p>

            <input
                type="text"
                placeholder="Search by customer or order ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="orders-table-wrapper">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.id}>
                                <td>#{order.id}</td>
                                <td>{order.customer}</td>
                                <td>{order.items}</td>
                                <td>?{order.total}</td>
                                <td>
                                    <span className={`order-status ${order.status.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td>
                                    <select
                                        value={order.status}
                                        onChange={(e) => updateStatus(order.id, e.target.value)}
                                    >
                                        <option>Pending</option>
                                        <option>Preparing</option>
                                        <option>Delivered</option>
                                        <option>Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredOrders.length === 0 && <p>No orders found.</p>}
            </div>
        </div>
    );
}

export default Orders;


