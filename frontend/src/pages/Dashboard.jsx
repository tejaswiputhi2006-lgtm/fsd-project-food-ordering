import React from "react";
import {
  ShoppingBag, IndianRupee, Users, Utensils,
  TrendingUp, Clock, CheckCircle, Truck
} from "lucide-react";
import "./Dashboard.css";

function Dashboard() {
  const stats = [
    { title: "Total Orders", value: "1,248", icon: ShoppingBag, color: "orange", change: "+12.5%" },
    { title: "Total Revenue", value: "?85,420", icon: IndianRupee, color: "green", change: "+8.2%" },
    { title: "Customers", value: "856", icon: Users, color: "blue", change: "+15.3%" },
    { title: "Food Items", value: "48", icon: Utensils, color: "purple", change: "+4 new" }
  ];

  const orders = [
    { id: "#ORD1001", customer: "Rahul Sharma", food: "Chicken Burger", amount: "?250", status: "Delivered" },
    { id: "#ORD1002", customer: "Priya Reddy", food: "Veg Pizza", amount: "?450", status: "Preparing" },
    { id: "#ORD1003", customer: "Arjun Kumar", food: "French Fries", amount: "?120", status: "Pending" },
    { id: "#ORD1004", customer: "Sneha Rao", food: "Pasta", amount: "?320", status: "Delivered" },
    { id: "#ORD1005", customer: "Kiran Patel", food: "Sandwich", amount: "?180", status: "Preparing" }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-heading">
        <div>
          <p className="dashboard-greeting">OVERVIEW</p>
          <h1>Dashboard</h1>
          <p>Welcome back, Admin! Here's what's happening today.</p>
        </div>
        <div className="dashboard-date">?? {new Date().toLocaleDateString("en-IN")}</div>
      </div>

      <div className="stats-grid">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="stat-card" key={index}>
              <div className={`stat-icon ${item.color}`}>
                <Icon size={24} />
              </div>
              <p>{item.title}</p>
              <h2>{item.value}</h2>
              <span className="stat-change">{item.change} <TrendingUp size={14} /></span>
            </div>
          );
        })}
      </div>

      <div className="dashboard-sections">
        <section className="dashboard-panel order-panel">
          <div className="panel-heading">
            <div>
              <h2>Recent Orders</h2>
              <p>Latest customer orders</p>
            </div>
            <ShoppingBag size={22} />
          </div>

          <div className="table-wrapper">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Food Item</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>{order.food}</td>
                    <td>{order.amount}</td>
                    <td>
                      <span className={`order-status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="dashboard-panel activity-panel">
          <h2>Order Activity</h2>
          <p>Today's order summary</p>

          <div className="activity-item">
            <div className="activity-icon pending"><Clock size={19} /></div>
            <div><strong>Pending Orders</strong><span>Orders waiting for confirmation</span></div>
            <b>12</b>
          </div>

          <div className="activity-item">
            <div className="activity-icon preparing"><Utensils size={19} /></div>
            <div><strong>Preparing Orders</strong><span>Orders being prepared</span></div>
            <b>18</b>
          </div>

          <div className="activity-item">
            <div className="activity-icon delivered"><CheckCircle size={19} /></div>
            <div><strong>Delivered Orders</strong><span>Successfully delivered</span></div>
            <b>45</b>
          </div>

          <div className="activity-item">
            <div className="activity-icon delivery"><Truck size={19} /></div>
            <div><strong>Out for Delivery</strong><span>Orders on the way</span></div>
            <b>8</b>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
