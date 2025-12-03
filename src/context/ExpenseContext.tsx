import React, { createContext, useContext, useState, useEffect } from "react";
import type { Expense } from "../types/Expense";
import { load, save } from "../utils/localStorage";
import { v4 as uuidv4 } from "uuid";

interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (exp: Omit<Expense, "id">) => void;
  updateExpense: (id: string, exp: Partial<Expense>) => void;
  deleteExpense: (id: string) => void;
  totals: { income: number; expense: number };
  balance: number;
}

const KEY = "expense_snap_ts";
const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const useExpenses = () => {
  const ctx = useContext(ExpenseContext);
  if (!ctx) throw new Error("useExpenses must be used within ExpenseProvider");
  return ctx;
};

export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>(() => load(KEY, []));

  useEffect(() => save(KEY, expenses), [expenses]);

  const addExpense = (exp: Omit<Expense, "id">) => {
    setExpenses(prev => [{ ...exp, id: uuidv4() }, ...prev]);
  };

  const updateExpense = (id: string, data: Partial<Expense>) => {
    setExpenses(prev => prev.map(e => e.id === id ? { ...e, ...data } : e));
  };

  const deleteExpense = (id: string) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  const totals = expenses.reduce((acc, e) => {
    if (e.type === "income") acc.income += e.amount; else acc.expense += e.amount;
    return acc;
  }, { income: 0, expense: 0 });

  const balance = totals.income - totals.expense;

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, updateExpense, deleteExpense, totals, balance }}>
      {children}
    </ExpenseContext.Provider>
  );
};
