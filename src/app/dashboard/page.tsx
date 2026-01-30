"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { TrendingUp, TrendingDown, Wallet, Plus } from "lucide-react";

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
              <Button type="submit" form="transaction-form" className="w-full sm:w-auto">
                Add Transaction
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* SUMMARY CARDS - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
              ₹0.00
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              This month
            </p>
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
              ₹0.00
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              This month
            </p>
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
              ₹0.00
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              0% savings rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CHARTS SECTION - Responsive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Spending by Category */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              Spending by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] sm:h-[300px] flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-sm sm:text-base">No spending data yet</p>
                <p className="text-xs mt-2">Add transactions to see insights</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Income vs Expenses Over Time */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              Income vs Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] sm:h-[300px] flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-sm sm:text-base">Chart will appear here</p>
                <p className="text-xs mt-2">Track your financial trends</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RECENT TRANSACTIONS - Responsive layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Transactions List - Takes 2 columns on XL screens */}
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
            <div className="space-y-4">
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
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions - Hidden on mobile, shown as separate card on larger screens */}
        <Card className="hidden xl:block hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full" size="lg" variant="default">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Transaction
                </Button>
              </DialogTrigger>
            </Dialog>
            
            <Button className="w-full" size="lg" variant="outline">
              View Reports
            </Button>
            
            <Button className="w-full" size="lg" variant="outline">
              Manage Categories
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;