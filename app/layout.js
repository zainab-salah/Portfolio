import Providers from "./Providers";
import "./globals.css";
import "aos/dist/aos.css";
import { Source_Code_Pro } from "next/font/google";

const SourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Zainab Salah",
  description:
    "A passionate frontend developer originally from Iraq and currently based in Turkey. I hold a bachelor's degree in Mathematics, which has equipped me with a strong foundation for problem-solving and analytical thinking. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://img.icons8.com/color/48/z.png" />
      </head>
      <body className={SourceCodePro.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
