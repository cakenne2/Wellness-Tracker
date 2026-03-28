// Layout file with metadata
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Wellness Tracker</title>
        <meta name="description" content="Track your wellness journey." />
      </head>
      <body>{children}</body>
    </html>
  );
}