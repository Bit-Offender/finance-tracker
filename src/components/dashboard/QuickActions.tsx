import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import TransactionCard from "./TransactionCard";

const QuickActions = () => {
  return (
    <>
      {/* Quick Actions - Hidden on mobile, shown as separate card on larger screens */}
      <Card className="hidden xl:block hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
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

          <Button className="w-full" size="lg" variant="outline">
            View Reports
          </Button>

          <Button className="w-full" size="lg" variant="outline">
            Manage Categories
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default QuickActions;
