"use client";

import SidebarDashboard from "@/components/dashboard/SidebarDashboard";
import Navbar from "@/components/dashboard/Navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <SidebarDashboard />
        <SidebarInset className="flex flex-col h-screen overflow-y-auto">
          <Navbar />
          <main className="p-4 flex-1">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
