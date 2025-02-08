import { AppSidebar } from "@/components/app-sidebar";
import type { Metadata } from "next";
import { Sulphur_Point } from "next/font/google";
import "./globals.css";

import { SearchForm } from "@/components/search-form";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

const sulphur_point = Sulphur_Point({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tenka | Get details of your favorite anime",
  description:
    "Tenka is a web app that provides detailed information about anime.",
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
                {/* <Header /> */}
              </header>

              <main className="w-full py-2">{children}</main>
            </SidebarInset>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
