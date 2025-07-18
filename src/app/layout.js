import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import AuthProvider from "./Context/AuthProvider";
import Providers from "./Providers";
import Footer from "./shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "College Mate",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AuthProvider>
            <Navbar />
            <main className="w-10/12 mx-auto mt-22">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
