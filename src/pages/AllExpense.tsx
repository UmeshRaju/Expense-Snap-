import React from "react";
import { useNavigate } from "react-router-dom";
import { useExpenses } from "../context/ExpenseContext";
import ExpenseList from "../components/ExpenseList";

const AllExpenses: React.FC = () => {
  const { expenses, deleteExpense } = useExpenses();
  const navigate = useNavigate();
  const handleEdit = (exp: any) => navigate(`/add?id=${exp.id}`);
  return (<div className="space-y-4"><div className="flex items-center justify-between"><h2 className="text-xl font-semibold">All Expenses</h2><div><button onClick={() => navigate('/add')} className="px-3 py-2 bg-teal-600 text-white rounded-md">Add New</button></div></div><ExpenseList expenses={expenses} onEdit={handleEdit} onDelete={deleteExpense} /></div>);
};
export default AllExpenses;
