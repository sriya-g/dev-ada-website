import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Ada | Women in Computer Science",
  description: "Dev Ada is the semester-long project cycle run by Women in Computer Science at UIUC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
