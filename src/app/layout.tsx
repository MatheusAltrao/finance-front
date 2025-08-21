import { getSession } from "@/helpers/session";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinanceApp",
  description: "FinanceApp",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession();

  if (!user) {
    console.log("NO USER LAYOUT");
  }

  return (
    <html lang="pt-br">
      <body className={`${poppins.className} dark antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
