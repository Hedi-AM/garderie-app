import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Garderie Les Petits Anges",
  description: "A safe and fun place for your children",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}