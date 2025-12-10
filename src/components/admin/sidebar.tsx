"use client";

import { Briefcase, FileText, Home, Users } from "lucide-react";
import {
  useSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  Sidebar
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo-letter.png";

const menuItems = [
  { title: "Dashboard", url: "/company-admin", icon: Home },
  { title: "Jobs", url: "/company-admin/jobs", icon: Briefcase },
  { title: "Applications", url: "/company-admin/applications", icon: FileText },
  { title: "Users", url: "/company-admin/users", icon: Users }
];

export default function AdminSidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();
  const isCollapsed = state === "collapsed";

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-primary text-primary-foreground font-medium shadow-sm"
      : "text-foreground/80 hover:bg-accent/10 hover:text-foreground transition-colors";
  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sidebar-background border-r border-sidebar-border">
        <div
          className={`p-6 border-b border-sidebar-border ${
            isCollapsed ? "px-3" : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg text-sidebar-primary-foreground">
              <Image alt="logo" src={logo} />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-base text-sidebar-foreground">
                  StudentHub
                </h2>
                <p className="text-xs text-sidebar-foreground/60">
                  Admin Panel
                </p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-3 py-4">
          <SidebarGroupLabel
            className={`text-sidebar-foreground/70 ${
              isCollapsed ? "sr-only" : ""
            }`}
          >
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-11">
                    <Link
                      href={item.url}
                      className={getNavCls({
                        isActive: item.url == pathname
                      })}
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && (
                        <span className="ml-3">{item.title}</span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
