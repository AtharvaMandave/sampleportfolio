import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import SmoothScroll from "../components/SmoothScroll";
import TopNav from "../components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pratik More | Portfolio",
  description: "Portfolio of Pratik More",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll />
        <div className="app-container">
          <Sidebar />
          {/* Right Box Container */}
          <main className="main-content-box glass-panel">
            <TopNav />
            <div className="content-scroll-wrapper">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
