"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/full-logo.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from "./ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default function Navbar() {
  const router = useRouter();

  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: null
  };

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav className=" bg-primary backdrop-blur sticky top-0 supports-[backdrop-filter]:bg-primary/95 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 bg-background rounded-full px-4 py-2 cursor-pointer hover:scale-105 transition-all">
          <Image src={logo} alt="logo" height={30} />
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="flex items-center justify-center rounded-md text-sm font-medium md:px-4 px-2 py-2 text-secondary hover:bg-primary-foreground/10"
            href="/auth"
          >
            Login
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10 ring-2 ring-primary-foreground/20 hover:ring-primary-foreground/40 transition-all">
                <AvatarImage src={user.image || undefined} alt={user.name} />
                <AvatarFallback className="bg-primary-foreground text-primary font-semibold">
                  {getUserInitials(user.name)}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-background"
            align="end"
            forceMount
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => router.push("/profile")}
              className="cursor-pointer"
            >
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => router.push("/settings")}
              className="cursor-pointer"
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
