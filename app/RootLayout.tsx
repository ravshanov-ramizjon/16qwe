import "./globals.css";
import { PageTitleProvider } from "@/context/PageTitleContext";
import SessionProvider from "@/components/castom/SessionProvider";
import { getServerSession } from "next-auth";
import { LayoutContent } from "@/components/castom/LayoutContent"; 

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className="antialiased flex items-center justify-between w-full">
        <SessionProvider session={session}>
          <PageTitleProvider>
            <LayoutContent>
              {children}
            </LayoutContent>
          </PageTitleProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
