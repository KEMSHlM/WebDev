import "./globals.css";

export const metadata = {
  title: "AI Art Gallery",
  description: "AI Art Gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
