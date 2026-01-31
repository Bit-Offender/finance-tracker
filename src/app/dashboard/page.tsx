"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TransactionCard from "@/components/dashboard/TransactionCard";
import { Plus } from "lucide-react";
import SummaryCards from "@/components/dashboard/SummaryCards";
import Charts from "@/components/dashboard/Charts";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import QuickActions from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 space-y-6">
      {/* HEADER - Responsive flex direction */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1">
            Track your income and expenses
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Add Transaction
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[95vw] sm:max-w-md">
            <DialogHeader className="sr-only">
              <DialogTitle>Add Transaction</DialogTitle>
            </DialogHeader>
            <TransactionCard />
            <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2">
              <DialogClose asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                form="transaction-form"
                className="w-full sm:w-auto"
              >
                Add Transaction
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* SUMMARY CARDS - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <SummaryCards />
      </div>

      {/* CHARTS SECTION - Responsive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Charts />
      </div>

      {/* RECENT TRANSACTIONS - Responsive layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        <RecentTransactions />
        <QuickActions />
      </div>
    </div>
  );
};

export default Dashboard;
