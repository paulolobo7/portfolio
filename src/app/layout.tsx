import "./globals.css"
import { Geist } from "next/font/google";
import { ThemeProvider } from "./providers/theme";

const geist = Geist({ subsets: ["latin"] });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${geist.className} min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-zinc-100 antialiased selection:bg-zinc-800 selection:text-zinc-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
