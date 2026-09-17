import './globals.css';

export const metadata = {
  title: 'PropOps AI — Live Demo',
  description: 'AI-powered property operations & financial engine — interactive demo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
