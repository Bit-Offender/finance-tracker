import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Charts = () => {
  return (
    <>
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
    </>
  );
};

export default Charts;
