import React, { useEffect, useState } from "react";
import type { Expense } from "../types/Expense";

interface Props { onSubmit: (d: Omit<Expense, "id">) => void; initial?: Expense | null }
const defaultForm: Omit<Expense, "id"> = { title: "", amount: 0, type: "expense", category: "Other", date: new Date().toISOString() };

const ExpenseForm: React.FC<Props> = ({ onSubmit, initial }) => {
  const [form, setForm] = useState<Omit<Expense, "id">>(initial ?? defaultForm);
  useEffect(() => setForm(initial ?? defaultForm), [initial]);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === 'amount' ? Number(value) : value } as any));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }} className="bg-white p-4 rounded-2xl shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm text-slate-600">Title</label>
          <input required name="title" value={form.title} onChange={handle} className="mt-1 w-full border border-slate-200 rounded-md p-2" />
        </div>
        <div>
          <label className="text-sm text-slate-600">Amount</label>
          <input required name="amount" value={form.amount} onChange={handle} type="number" step="0.01" className="mt-1 w-full border border-slate-200 rounded-md p-2" />
        </div>
        <div>
          <label className="text-sm text-slate-600">Type</label>
          <select name="type" value={form.type} onChange={handle} className="mt-1 w-full border border-slate-200 rounded-md p-2">
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-slate-600">Category</label>
          <select name="category" value={form.category} onChange={handle} className="mt-1 w-full border border-slate-200 rounded-md p-2">
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Salary</option>
            <option>Health</option>
            <option>Entertainment</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-slate-600">Date</label>
          <input name="date" value={form.date.slice(0,16)} onChange={(e) => setForm(prev => ({ ...prev, date: e.target.value }))} type="datetime-local" className="mt-1 w-full border border-slate-200 rounded-md p-2" />
        </div>
      </div>
      <div className="mt-4 flex gap-2 justify-end"><button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded-md shadow">Save</button></div>
    </form>
  );
};
export default ExpenseForm;
