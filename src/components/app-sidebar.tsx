import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Calendar, Clock, Star, Activity } from "lucide-react";
import ThemeToggleButton from "./Header/ThemeToggleButton";

const data = {
  navMain: [
    {
      title: "Top Anime",
      items: [
        { title: "Airing", icon: Clock },
        { title: "Upcoming", icon: Calendar },
        { title: "Popularity", icon: Star },
        { title: "Favorite", icon: Activity },
      ],
    },

    {
      title: "Anime Seasons",
      items: [{ title: "Upcoming Seasons", icon: Calendar }],
    },
    {
      title: "Scheduling Days",
      items: [
        { title: "Monday", icon: Calendar },
        { title: "Tuesday", icon: Calendar },
        { title: "Wednesday", icon: Calendar },
        { title: "Thursday", icon: Calendar },
        { title: "Friday", icon: Calendar },
        { title: "Saturday", icon: Calendar },
        { title: "Sunday", icon: Calendar },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex h-12 items-center justify-between">
          <p className="px-3 text-3xl font-bold tracking-widest">TENKA</p>
          <ThemeToggleButton />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={`/${subItem.title.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <p className="flex cursor-pointer items-center">
                          {subItem.icon && (
                            <subItem.icon className="mr-2 h-4 w-4" />
                          )}
                          {subItem.title}
                        </p>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
