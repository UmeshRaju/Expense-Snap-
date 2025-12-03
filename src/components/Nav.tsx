import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Nav: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-teal-600 text-white" : "text-slate-700 hover:bg-slate-100"}`;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ExpenseSnap" className="w-10 h-10" />
            <div>
              <div className="text-slate-900 font-semibold">ExpenseSnap</div>
              <div className="text-xs text-slate-500">Personal Expense Tracker</div>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <NavLink to="/" className={linkClass} end>Home</NavLink>
            <NavLink to="/add" className={linkClass}>Add</NavLink>
            <NavLink to="/expenses" className={linkClass}>Expenses</NavLink>
            <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
