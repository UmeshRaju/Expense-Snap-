import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useExpenses } from "../context/ExpenseContext";

const Home: React.FC = () => {
  const { totals, balance, expenses } = useExpenses();
  const navigate = useNavigate();
  const recent = expenses.slice(0,5);
  return (
    <div className="space-y-4">
      <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-500 text-white p-4 shadow">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm opacity-90">Total Balance</div>
            <div className="text-3xl font-semibold mt-1">₹{balance.toFixed(2)}</div>
            <div className="text-xs opacity-90 mt-1">Income: ₹{totals.income.toFixed(2)} · Expense: ₹{totals.expense.toFixed(2)}</div>
          </div>
          <div className="flex flex-col gap-2"><button onClick={() => navigate('/add')} className="px-3 py-2 bg-white/20 rounded-md">Add Expense</button><button onClick={() => navigate('/dashboard')} className="px-3 py-2 bg-white/20 rounded-md">View Dashboard</button></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><Card title="Balance" value={`₹${balance.toFixed(2)}`} subtitle="Now" /><Card title="Income" value={`₹${totals.income.toFixed(2)}`} subtitle="Total" accent="text-teal-600" /><Card title="Expenses" value={`₹${totals.expense.toFixed(2)}`} subtitle="Total" accent="text-rose-600" /></div>
      <section>
        <div className="flex items-center justify-between mb-2"><h3 className="text-lg font-semibold">Recent Expenses</h3></div>
        <div className="space-y-2">{recent.map(r => <div key={r.id} className="bg-white p-3 rounded-xl shadow flex items-center justify-between"><div><div className="font-medium">{r.title}</div><div className="text-sm text-slate-500">{new Date(r.date).toLocaleString()}</div></div><div className={`font-semibold ${r.type === 'income' ? 'text-teal-600' : 'text-rose-600'}`}>{r.type === 'income' ? '+' : '-'}₹{r.amount.toFixed(2)}</div></div>)}</div>
      </section>
    </div>
  );
};
export default Home;
