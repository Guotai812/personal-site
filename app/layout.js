import "./globals.css";
import NavBar from "@/components/head/NavBar";


export const metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <NavBar />
          {children}
      </body>
    </html>
  );
}
