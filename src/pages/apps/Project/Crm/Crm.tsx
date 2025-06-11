import React, { useState, useEffect } from "react";

// Customer type
interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

function Crm() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [editingId, setEditingId] = useState<number | null>(null);

  // Fetch customers from API on mount
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // <-- This will log all users to the console
        // Get deleted IDs from localStorage
        const deletedIds = JSON.parse(localStorage.getItem("deletedUserIds") || "[]");
        const users: Customer[] = data.users
          .filter((u: any) => !deletedIds.includes(u.id))
          .map((u: any) => ({
            id: u.id,
            name: `${u.firstName} ${u.lastName}`,
            email: u.email,
            phone: u.phone,
          }));
        setCustomers(users);
      });
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update customer
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Only add new user, do not update existing
    // Split name into firstName and lastName for the API
    const [firstName, ...rest] = form.name.split(" ");
    const lastName = rest.join(" ") || "";
    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email: form.email,
          phone: form.phone,
        }),
      });
      const data = await res.json();
      const newUser = {
        id: data.id,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
      };
      // Add to local state
      const updatedCustomers = [...customers, newUser];
      setCustomers(updatedCustomers);
      // Save only new users (id > 1000) to localStorage
      const localUsers = JSON.parse(localStorage.getItem("localUsers") || "[]");
      localUsers.push(newUser);
      localStorage.setItem("localUsers", JSON.stringify(localUsers));
    } catch (err) {
      console.error("Failed to add user:", err);
    }
    setForm({ name: "", email: "", phone: "" });
  };

  // Edit customer
  const handleEdit = (customer: Customer) => {
    setForm({ name: customer.name, email: customer.email, phone: customer.phone });
    setEditingId(customer.id);
  };

  // Delete customer (API + local)
  const handleDelete = async (id: number) => {
    try {
      await fetch(`https://dummyjson.com/users/${id}`, { method: "DELETE" });
      const deletedIds = JSON.parse(localStorage.getItem("deletedUserIds") || "[]");
      localStorage.setItem("deletedUserIds", JSON.stringify([...deletedIds, id]));
      const updatedCustomers = customers.filter(c => c.id !== id);
      setCustomers(updatedCustomers);
      // Remove from localUsers if present
      const localUsers = JSON.parse(localStorage.getItem("localUsers") || "[]").filter((u: Customer) => u.id !== id);
      localStorage.setItem("localUsers", JSON.stringify(localUsers));
      if (editingId === id) setEditingId(null);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="p-6 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-primary mb-2 text-center">CRM Dashboard</h1>
        <p className="text-gray-500 text-center">Manage your customers efficiently and beautifully.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-10">
        <h2 className="text-xl font-semibold mb-6 text-primary">{editingId ? "Edit Customer" : "Add Customer"}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-end gap-4">
          <input
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition w-full"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition w-full"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition w-full"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <div className="flex gap-2">
            <button
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-lg shadow transition w-full"
              type="submit"
            >
              {editingId ? "Update" : "Add"}
            </button>
            {editingId && (
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 transition w-full"
                onClick={() => {
                  setEditingId(null);
                  setForm({ name: "", email: "", phone: "" });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full">
        <h2 className="text-xl font-semibold mb-6 text-primary">Customer List</h2>
        <div className="overflow-x-auto w-full">
          <table className="w-full border border-gray-300 dark:border-gray-700 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">Phone</th>
                <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="bg-gray-50 dark:bg-gray-700 hover:bg-primary/10 dark:hover:bg-primary/20 transition border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="px-4 py-2 border-r border-gray-200 dark:border-gray-700">{customer.name}</td>
                  <td className="px-4 py-2 border-r border-gray-200 dark:border-gray-700">{customer.email}</td>
                  <td className="px-4 py-2 border-r border-gray-200 dark:border-gray-700">{customer.phone}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-blue-600 hover:underline mr-4 font-medium"
                      onClick={() => handleEdit(customer)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline font-medium"
                      onClick={() => handleDelete(customer.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {customers.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-400">
                    No customers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Crm;