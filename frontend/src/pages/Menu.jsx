import React, { useState } from "react";
import { Plus, Search, Pencil, Trash2, X } from "lucide-react";
import "./Menu.css";

function Menu() {
  const [foods, setFoods] = useState([
    { id: 1, name: "Chicken Burger", category: "Burgers", price: 180, emoji: "??", available: true },
    { id: 2, name: "Veg Pizza", category: "Pizza", price: 250, emoji: "??", available: true },
    { id: 3, name: "French Fries", category: "Snacks", price: 100, emoji: "??", available: true },
    { id: 4, name: "Pasta", category: "Main Course", price: 220, emoji: "??", available: true },
    { id: 5, name: "Chocolate Cake", category: "Desserts", price: 150, emoji: "??", available: false },
    { id: 6, name: "Cold Coffee", category: "Drinks", price: 120, emoji: "??", available: true }
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "", category: "Burgers", price: "", emoji: "??", available: true
  });

  const saveFood = (e) => {
    e.preventDefault();

    if (!form.name.trim() || Number(form.price) <= 0) return;

    if (editingId) {
      setFoods(foods.map(food =>
        food.id === editingId ? { ...form, id: editingId, price: Number(form.price) } : food
      ));
    } else {
      setFoods([...foods, {
        ...form,
        id: Date.now(),
        price: Number(form.price)
      }]);
    }

    closeForm();
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm({ name: "", category: "Burgers", price: "", emoji: "??", available: true });
  };

  const editFood = (food) => {
    setForm({ ...food, price: String(food.price) });
    setEditingId(food.id);
    setShowForm(true);
  };

  const deleteFood = (id) => {
    if (window.confirm("Delete this food item?")) {
      setFoods(foods.filter(food => food.id !== id));
    }
  };

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(search.toLowerCase()) ||
    food.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="menu-page">
      <div className="menu-heading">
        <div>
          <span className="menu-label">RESTAURANT MANAGEMENT</span>
          <h1>Food Menu</h1>
          <p>Manage your restaurant's food items and prices.</p>
        </div>
        <button className="add-food-btn" onClick={() => setShowForm(true)}>
          <Plus size={19} /> Add Food Item
        </button>
      </div>

      <div className="menu-summary">
        <div><span>Total Food Items</span><strong>{foods.length}</strong></div>
        <div><span>Available Items</span><strong>{foods.filter(f => f.available).length}</strong></div>
        <div><span>Unavailable Items</span><strong>{foods.filter(f => !f.available).length}</strong></div>
      </div>

      <div className="menu-toolbar">
        <div className="menu-search">
          <Search size={19} />
          <input
            placeholder="Search food or category..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="food-grid">
        {filteredFoods.map(food => (
          <div className="food-card" key={food.id}>
            <div className="food-emoji">{food.emoji}</div>
            <div className="food-info">
              <span className="food-category">{food.category}</span>
              <h3>{food.name}</h3>
              <strong className="food-price">?{food.price}</strong>
              <span className={food.available ? "food-available" : "food-unavailable"}>
                {food.available ? "Available" : "Unavailable"}
              </span>
            </div>
            <div className="food-actions">
              <button onClick={() => editFood(food)} title="Edit"><Pencil size={17} /></button>
              <button onClick={() => deleteFood(food.id)} title="Delete"><Trash2 size={17} /></button>
            </div>
          </div>
        ))}
        {filteredFoods.length === 0 && <p>No food items found.</p>}
      </div>

      {showForm && (
        <div className="menu-modal">
          <form className="food-form" onSubmit={saveFood}>
            <div className="form-heading">
              <h2>{editingId ? "Edit Food Item" : "Add New Food"}</h2>
              <button type="button" onClick={closeForm}><X /></button>
            </div>

            <label>Food Name</label>
            <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter food name" />

            <label>Category</label>
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
              {["Burgers", "Pizza", "Snacks", "Main Course", "Desserts", "Drinks"].map(c => <option key={c}>{c}</option>)}
            </select>

            <label>Price (?)</label>
            <input required type="number" min="1" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} placeholder="Enter price" />

            <label>Food Emoji</label>
            <input value={form.emoji} onChange={e => setForm({ ...form, emoji: e.target.value })} />

            <label className="availability-check">
              <input type="checkbox" checked={form.available} onChange={e => setForm({ ...form, available: e.target.checked })} />
              Available for ordering
            </label>

            <button className="save-food-btn" type="submit">{editingId ? "Update Food" : "Save Food"}</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Menu;
