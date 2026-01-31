import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

const RecentTransactions = () => {
  return (
    <>
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
    </>
  );
};

export default RecentTransactions;
