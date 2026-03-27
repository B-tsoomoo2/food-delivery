import Image from "next/image";
import { LayoutGrid, Truck } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const AdminSidebar = () => {
  return (
    <Sidebar collapsible="none" className="border-r border-zinc-200 bg-white">
      <SidebarHeader className="px-7 py-14">
        <div className="flex items-center gap-4">
          <Image
            src="/foodorder.svg"
            alt="NomNom logo"
            width={52}
            height={44}
            className="h-11 w-13"
          />

          <div className="flex flex-col">
            <span className="text-[24px]  font-semibold  text-black">
              NomNom
            </span>
            <span className="mt-2 text-[14px] text-zinc-500">
              Swift delivery
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-6">
        <SidebarMenu className="gap-8">
          <SidebarMenuItem>
            <SidebarMenuButton
              className={cn(
                "h-14.5 rounded-full px-8 text-[18px] font-medium",
                "",
              )}
            >
              <LayoutGrid className="size-5 text-[#A855F7]" />
              <Link href="/foods">Foods</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              className={cn(
                "h-14.5 rounded-full px-8 text-[18px] font-medium",
                "bg-transparent text-black hover:bg-zinc-100",
              )}
            >
              <Truck className="size-5" />
              <Link href="/orders">Orders</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
