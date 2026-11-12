import React, { useState } from "react";
import "./Customers.css";

function Customers() {
    const [customers, setCustomers] = useState([
        { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", phone: "9876543210" },
        { id: 2, name: "Priya Reddy", email: "priya@gmail.com", phone: "9876543211" },
        { id: 3, name: "Arjun Kumar", email: "arjun@gmail.com", phone: "9876543212" }
    ]);

    const [search, setSearch] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const addCustomer = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !phone.trim()) {
            alert("Please fill all customer details.");
            return;
        }

        setCustomers([
            ...customers,
            { id: Date.now(), name, email, phone }
        ]);

        setName("");
        setEmail("");
        setPhone("");
    };

    const deleteCustomer = (id) => {
        setCustomers(customers.filter(customer => customer.id !== id));
    };

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(search.toLowerCase()) ||
        customer.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="customers-page">
            <h1>Customer Management</h1>
            <p>Manage your restaurant customers.</p>

            <form className="customer-form" onSubmit={addCustomer}>
                <input
                    placeholder="Customer Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    placeholder="Phone Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <button type="submit">Add Customer</button>
            </form>

            <input
                className="customer-search"
                placeholder="Search customers..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <div className="customer-grid">
                {filteredCustomers.map(customer => (
                    <div className="customer-card" key={customer.id}>
                        <h3>{customer.name}</h3>
                        <p>{customer.email}</p>
                        <p>{customer.phone}</p>
                        <button onClick={() => deleteCustomer(customer.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {filteredCustomers.length === 0 && <p>No customers found.</p>}
        </div>
    );
}

export default Customers;


