import "./globals.css";
import NavBar from "./NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex relative ml-56">
        <NavBar />
        <div className="py-4 px-12 bg-stone-600">{children}</div>
      </body>
    </html>
  );
}
