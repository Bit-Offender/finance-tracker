import SidebarDashboard from "@/components/dashboard/SidebarDashboard";
import Navbar from "@/components/dashboard/Navbar";
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
