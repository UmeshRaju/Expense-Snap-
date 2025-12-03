import React from "react";
import type { Expense } from "../types/Expense";

interface Props { expense: Expense; onEdit: () => void; onDelete: () => void }
const ExpenseItem: React.FC<Props> = ({ expense, onEdit, onDelete }) => (
  <div className="bg-white p-3 rounded-xl shadow flex items-center justify-between">
    <div>
      <div className="font-medium text-slate-800">{expense.title}</div>
      <div className="text-sm text-slate-500">{new Date(expense.date).toLocaleString()} · {expense.category}</div>
    </div>
    <div className="flex items-center gap-3">
      <div className={`font-semibold ${expense.type === 'income' ? 'text-teal-600' : 'text-rose-600'}`}>{expense.type === 'income' ? '+' : '-'}₹{expense.amount.toFixed(2)}</div>
      <button onClick={onEdit} className="text-sm px-3 py-1 bg-slate-100 rounded-md">Edit</button>
      <button onClick={onDelete} className="text-sm px-3 py-1 bg-rose-50 text-rose-600 rounded-md">Delete</button>
    </div>
  </div>
);
export default ExpenseItem;
