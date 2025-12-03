import React, { useMemo } from "react";
import { useExpenses } from "../context/ExpenseContext";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

const COLORS = ["#0ea5a4", "#06b6d4", "#f97316", "#ef4444", "#a78bfa", "#84cc16", "#fb7185"];
const Dashboard: React.FC = () => {
  const { expenses } = useExpenses();
  const byCategory = useMemo(() => {
    const map: Record<string, number> = {};
    expenses.forEach(e => { if (e.type === 'expense') map[e.category] = (map[e.category] || 0) + e.amount; });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [expenses]);
  const lastSeven = useMemo(() => expenses.slice(0,7).map(e => ({ name: e.title.slice(0,10), amount: e.amount })), [expenses]);
  return (<div className="space-y-6"><h2 className="text-xl font-semibold">Dashboard</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="bg-white p-4 rounded-2xl shadow"><h3 className="font-medium mb-2">Spending by Category</h3>{byCategory.length === 0 ? <div className="text-slate-500">No expense data yet</div> : <div style={{width:'100%', height:300}}><ResponsiveContainer><PieChart><Pie data={byCategory} dataKey="value" nameKey="name" outerRadius={90} label />{byCategory.map((_,i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}<Tooltip /><Legend /></PieChart></ResponsiveContainer></div>}</div><div className="bg-white p-4 rounded-2xl shadow"><h3 className="font-medium mb-2">Last 7 (most recent)</h3>{lastSeven.length === 0 ? <div className="text-slate-500">No entries yet</div> : <div style={{width:'100%', height:300}}><ResponsiveContainer><BarChart data={lastSeven} layout="vertical" margin={{top:5,right:20,left:20,bottom:5}}><XAxis type="number" /><YAxis dataKey="name" type="category" width={120} /><Tooltip /><Bar dataKey="amount" fill="#06b6d4" /></BarChart></ResponsiveContainer></div>}</div></div></div>);
};
export default Dashboard;
