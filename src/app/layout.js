
import './game.css'
export const metadata = { title: 'Tic - Tac - Toe' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
