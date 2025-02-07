import type { Metadata } from "next";
import { Sulphur_Point } from "next/font/google";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";
import { Calendar, Globe, LinkIcon } from "lucide-react";
import { SearchForm } from "@/components/search-form";

const sulphur_point = Sulphur_Point({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sulphur_point.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {/* <Header /> */}
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
                <div className="flex w-full items-center gap-2">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <SearchForm className="w-full" />
                </div>
                <div className="flex items-center justify-end gap-4 sm:w-full">
                  <div className="flex cursor-pointer items-center gap-2">
                    <Globe />
                    <p className="hidden xl:block">Discover Anime</p>
                  </div>
                  <div className="flex cursor-pointer items-center gap-2">
                    <Calendar />
                    <p className="hidden xl:block">Discover Seasons</p>
                  </div>
                  <div className="flex cursor-pointer items-center gap-2">
                    <LinkIcon />
                    <p className="hidden xl:block">Random Anime</p>
                  </div>
                </div>
              </header>

              <main className="w-full py-2">{children}</main>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
