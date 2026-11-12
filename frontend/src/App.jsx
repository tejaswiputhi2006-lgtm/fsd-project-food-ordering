import React, { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Reports from "./pages/Reports";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import "./App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activePage, setActivePage] = useState("Dashboard");

    const renderPage = () => {
        switch (activePage) {
            case "Dashboard":
                return <Dashboard />;
            case "Menu":
                return <Menu />;
            case "Orders":
                return <Orders />;
            case "Customers":
                return <Customers />;
            case "Reports":
                return <Reports />;
            default:
                return <Dashboard />;
        }
    };

    if (!isLoggedIn) {
        return <Login onLogin={() => setIsLoggedIn(true)} />;
    }

    return (
        <div className="app-container">
            <Navbar />

            <div className="app-layout">
                <Sidebar
                    activePage={activePage}
                    setActivePage={setActivePage}
                />

                <main className="main-content">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
}

export default App;
