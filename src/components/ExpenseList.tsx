import React from "react";
import type { Expense } from "../types/Expense";
import ExpenseItem from "./ExpenseItem";

interface Props { expenses: Expense[]; onEdit: (e: Expense) => void; onDelete: (id: string) => void }
const ExpenseList: React.FC<Props> = ({ expenses, onEdit, onDelete }) => {
  if (!expenses.length) return <div className="text-center text-slate-500 p-6">No expenses yet. Add your first item!</div>;
  return <div className="space-y-3">{expenses.map(e => <ExpenseItem key={e.id} expense={e} onEdit={() => onEdit(e)} onDelete={() => onDelete(e.id)} />)}</div>;
};
export default ExpenseList;
