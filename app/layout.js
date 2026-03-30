import "./globals.css"
import NavBar from "./Components/Layout/NavBar";

export const metadata = {
  title: "Inventory",
  description: "product inventory system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white min-h-screen">
        <NavBar />
        <main className="px-4 md:px-8 py-4">
          {children}
        </main>
      </body>
    </html>
  );
}