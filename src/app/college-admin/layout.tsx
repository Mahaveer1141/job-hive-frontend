"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin/sidebar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function CollegeAdminLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <AdminSidebar />

        <div className="flex-1 flex flex-col">
          <header className="sticky top-0 z-10 h-16 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-muted" />
              <div>
                <p className="text-sm font-medium">Welcome back, Admin</p>
                <p className="text-xs text-muted-foreground">
                  Manage your platform
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="gap-2 hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </header>

          <main className="flex-1 p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
