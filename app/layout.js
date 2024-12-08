import "./globals.css";
import { Provider } from  "./provider";
import { Roboto_Mono } from 'next/font/google'
import Navigation from './navigation.js';

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
 
export const metadata = {
  title: 'Wirebird',
  description: 'Take control of your internet traffic. Utilize proxy multi-hop, split tunneling, and advanced device customization.',
  metadataBase: new URL('https://wirebird.net'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <Navigation />
          {children}
        </body>
      </Provider>
    </html>
  );
}

