import React from "react";
import { Bell, UserCircle, Utensils } from "lucide-react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Utensils size={25} />
                <span>Foodie Admin</span>
            </div>

            <div className="navbar-right">
                <span className="admin-label">Administrator</span>
                <Bell size={21} />
                <UserCircle size={27} />
            </div>
        </nav>
    );
}

export default Navbar;
