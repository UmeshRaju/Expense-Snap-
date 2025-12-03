import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import { useExpenses } from "../context/ExpenseContext";

const AddExpense: React.FC = () => {
  const { addExpense, expenses, updateExpense } = useExpenses();
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const id = search.get('id');
  const initial = id ? expenses.find(e => e.id === id) ?? null : null;
  const handleSubmit = (data: any) => { if (id) updateExpense(id, data); else addExpense(data); navigate('/'); };
  return (<div className="space-y-4"><h2 className="text-xl font-semibold">{id ? 'Edit Expense' : 'Add Expense'}</h2><ExpenseForm onSubmit={handleSubmit} initial={initial} /></div>);
};
export default AddExpense;
