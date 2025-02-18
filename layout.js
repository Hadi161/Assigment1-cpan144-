
import Navbar from './components/Navbar';
import './globals.css';

export const Metadata = {
  title: 'My First App using React',
  description: 'A simple and easy React app',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
