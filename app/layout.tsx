import './globals.css';

export const metadata = {
  title: 'Better Voice',
  description: 'Customer feedback platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
