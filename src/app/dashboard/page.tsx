import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import TransactionCard from "@/components/dashboard/TransactionCard";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="grid-cols-1 xl:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Your Last Transaction</CardTitle>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger>
                <Button>Add Transaction</Button>
              </DialogTrigger>
              <DialogContent>
                <TransactionCard />
                <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
              </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
