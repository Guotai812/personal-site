import "./globals.css";
import NavBar from "@/components/NavBar";
import IntroPage from "@/components/IntroPage";


export const metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="headContainer">
          <NavBar />
          <IntroPage />
        </div>
        {children}
      </body>
    </html>
  );
}
