import "./globals.css"
import { Geist } from "next/font/google";
import { ThemeProvider } from "./providers/theme";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
