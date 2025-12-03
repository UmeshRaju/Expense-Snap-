import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import AllExpenses from "./pages/AllExpense";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Nav />
      <main className="max-w-4xl mx-auto p-4 sm:p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/expenses" element={<AllExpenses />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}
