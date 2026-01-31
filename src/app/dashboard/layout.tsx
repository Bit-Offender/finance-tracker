"use client"

import SidebarDashboard from "@/components/dashboard/sidebarDashboard";
import Navbar from "@/components/dashboard/navbar";
import { SidebarInset } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarDashboard />
      <SidebarInset>
        <Navbar />
        <main className="p-4">
          {children}
        </main>
      </SidebarInset>
    </>
  );
}
