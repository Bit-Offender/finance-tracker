"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useSupabaseClient } from "@/lib/supabase/client";
import { useState } from "react";

export default function TransactionCard() {
  const supabase = useSupabaseClient();

  const [amount, setAmount] = useState("0");
  const [transactionType, setTransactionType] = useState<"INCOME" | "EXPENSE">(
    "INCOME",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTransaction = {
      amount: parseFloat(amount),
      type: transactionType,
    };

    console.log("Attempting to insert:", newTransaction);

    const { data, error } = await supabase
      .from("transactions")
      .insert(newTransaction)
      .select();

    if (error) {
      console.error("Error uploading:", error);
    } else {
      console.log("Successfully inserted:", data);
      setAmount("0");
      setTransactionType("INCOME");
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add a Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} id="transaction-form">
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="amount">Add a new transaction</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                placeholder="Eg. ₹50.00 ..."
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label>Income or Expense?</Label>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button type="button">
                    <span className="capitalize">
                      {transactionType.toLowerCase()}
                    </span>
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => setTransactionType("INCOME")}
                  >
                    Income
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setTransactionType("EXPENSE")}
                  >
                    Expense
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
