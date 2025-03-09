// app/layout.tsx
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { twMerge } from 'tailwind-merge';

// Load fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Note: You would need to have these font files in your project
// This is just a placeholder for the custom fonts mentioned in the strategy
const freightDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/FreightDispPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FreightDispPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-freight-display',
});

const neueHaas = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasDisplay-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas',
});

export const metadata = {
  title: 'Blessing Adenekan | Digital Marketing Leader & Founder',
  description:
    'Strategic, Data-Driven, Transformative digital marketing expert helping brands achieve significant growth through data-driven strategies.',
  metadataBase: new URL('https://stargirlstrategy.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={twMerge(
        inter.variable,
        freightDisplay.variable,
        neueHaas.variable,
        'font-sans text-charcoal antialiased'
      )}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
