import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";

// Font files can be colocated inside of `app`
const dmSans = localFont({
  src: "../../public/fonts/DMSans-VariableFont_opsz,wght.ttf",
  display: "swap",
  variable: "--font-dmSans"
});
// const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmSans" });
export const metadata: Metadata = {
  title: "Giwa Muhammad",
  description: "Full-Stack Web Engineer"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {children}

        <Script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" />
      </body>
    </html>
  );
}
