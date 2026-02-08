"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LoaderCircle, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { useSupabaseClient } from "@/lib/supabase/client";
import { useUser } from "@clerk/nextjs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type Transaction = { 
  id: number;
  type: string;
  created_at: string;
  amount: number;
}

const RecentTransactions = () => {
  const supabase = useSupabaseClient();
  const { user } = useUser();

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchRecentTransactions = async () => {
      const now = new Date();

      const lastWeekStart = new Date(now);
      lastWeekStart.setDate(now.getDate() - 7);
      lastWeekStart.setHours(0, 0, 0, 0);

      const lastWeekEnd = new Date(now);
      lastWeekEnd.setHours(23, 59, 59, 999);

      const { data, error } = await supabase
        .from("transactions")
        .select("id, amount, type, created_at")
        .eq("user_id", user.id)
        .gte("created_at", lastWeekStart.toISOString())
        .lte("created_at", lastWeekEnd.toISOString())
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) {
        console.error("Error fetching transactions:", error);
        setLoading(false);
        return;
      }

      setTransactions(data || []);
      setLoading(false);
    };

    fetchRecentTransactions();
  }, [user, supabase]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Card className="xl:col-span-2 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg sm:text-xl">
          Recent Transactions
        </CardTitle>
        <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-center py-8">
            <LoaderCircle className="font-bold animate-spin size-10"/>
          </div>
        ) : transactions.length > 0 ? (
          <Table>
            <TableCaption>
              Your recent transactions from the last 7 days.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {formatDate(transaction.created_at)}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`capitalize ${
                        transaction.type === "INCOME"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type.toLowerCase()}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    <span
                      className={
                        transaction.type === "INCOME"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {transaction.type === "INCOME" ? "+" : "-"}₹
                      {transaction.amount.toFixed(2)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-muted rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground" />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground font-medium">
              No transactions yet
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Add your first transaction to get started!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
