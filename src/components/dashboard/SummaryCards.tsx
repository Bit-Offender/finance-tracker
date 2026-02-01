"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TrendingDown, TrendingUp, Wallet } from "lucide-react";
import { useSupabaseClient } from "@/lib/supabase/client";
import { useUser } from "@clerk/nextjs";

const SummaryCards = () => {
  const supabase = useSupabaseClient();
  const { user } = useUser();

  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchTransactions = async () => {
      const now = new Date();
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
      const lastDay = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0,
        23,
        59,
        59,
        999,
      );

      const { data, error } = await supabase
        .from("transactions")
        .select("amount, type")
        .eq("user_id", user.id)
        .gte("created_at", firstDay.toISOString())
        .lte("created_at", lastDay.toISOString());

      if (error) {
        console.error("Error fetching transactions:", error.message);
        setLoading(false);
        return;
      }

      const income =
        data
          ?.filter((t) => t.type === "INCOME")
          .reduce((sum, t) => sum + t.amount, 0) || 0;

      const expense =
        data
          ?.filter((t) => t.type === "EXPENSE")
          .reduce((sum, t) => sum + t.amount, 0) || 0;

      setIncomeAmount(income);
      setExpenseAmount(expense);
      setLoading(false);
    };

    fetchTransactions();
  }, [ supabase, user ]);

  const savings = incomeAmount - expenseAmount;
  const savingsRate =
    incomeAmount > 0 ? ((savings / incomeAmount) * 100).toFixed(1) : 0;

  return (
    <>
      {/* Income Card */}
      <Card className="border-l-4 border-green-500 hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Income
          </CardTitle>
          <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-full">
            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
            {loading ? "Loading..." : `₹${incomeAmount.toFixed(2)}`}
          </div>
          <p className="text-xs text-muted-foreground mt-1">This month</p>
        </CardContent>
      </Card>

      {/* Expenses Card */}
      <Card className="border-l-4 border-red-500 hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Expenses
          </CardTitle>
          <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-full">
            <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold text-red-600 dark:text-red-400">
            {loading ? "Loading..." : `₹${expenseAmount.toFixed(2)}`}
          </div>
          <p className="text-xs text-muted-foreground mt-1">This month</p>
        </CardContent>
      </Card>

      {/* Savings Card */}
      <Card className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Net Savings
          </CardTitle>
          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full">
            <Wallet className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
            {loading ? "Loading..." : `₹${savings.toFixed(2)}`}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {loading ? "..." : `${savingsRate}% savings rate`}
          </p>
        </CardContent>
      </Card>
    </>
  );
};

export default SummaryCards;
