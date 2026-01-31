"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Button } from "../ui/button";
import { Moon, Sidebar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
        {/* LEFT SIDE */}
        <SidebarTrigger />
        <div className="flex items-center gap-4">
          {/* THEME MENU */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="focus:border-0" variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => setTheme("light")}
              >
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => setTheme("dark")}
              >
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                className="hover:cursor-pointer"
                onClick={() => setTheme("system")}
              >
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <UserButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
