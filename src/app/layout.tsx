import "./globals.css";
import {Sidebar} from "../components/Sidebar";
import {Footer} from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>Portfolio</title>
      </head>

      <body>
          <Sidebar/>
              {children}
          <Footer/>
        </body>
      </html>
  );
}
