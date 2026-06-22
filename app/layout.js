import "./globals.css";
import { ReduxProvider } from "@/store/ReduxProvider";
import ThemeWrapper from "@/components/ThemeWrapper";
import { personal } from "@/lib/config";

export const metadata = {
  title: `${personal.name} — Data Analyst`,
  description: personal.tagline,
  keywords:
    "Data Analyst, Python, SQL, Power BI, Portfolio, Business Intelligence",
  authors: [{ name: personal.name }],
  icons: {
    icon: "/photo_circle.png",
    shortcut: "/photo_circle.png",
    apple: "/photo_circle.png",
  },
  openGraph: {
    title: `${personal.name} — Data Analyst`,
    description: personal.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReduxProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
