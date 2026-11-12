import React from "react";
import {
    LayoutDashboard,
    Utensils,
    ShoppingBag,
    Users,
    BarChart3
} from "lucide-react";
import "./Sidebar.css";

function Sidebar({ activePage, setActivePage }) {
    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Menu", icon: Utensils },
        { name: "Orders", icon: ShoppingBag },
        { name: "Customers", icon: Users },
        { name: "Reports", icon: BarChart3 }
    ];

    return (
        <aside className="sidebar">
            <h3>MAIN MENU</h3>

            {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                    <button
                        key={item.name}
                        className={`sidebar-link ${activePage === item.name ? "active" : ""}`}
                        onClick={() => setActivePage(item.name)}
                    >
                        <Icon size={20} />
                        <span>{item.name}</span>
                    </button>
                );
            })}
        </aside>
    );
}

export default Sidebar;
