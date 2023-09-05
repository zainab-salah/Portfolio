import Providers from "./Providers";
import "./globals.css";
import { Source_Code_Pro } from "next/font/google";

const SourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Zainab Salah",
  description: "Port ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={SourceCodePro.className} suppressHydrationWarning={true}>{children}</body>
      </Providers>
    </html>
  );
}
