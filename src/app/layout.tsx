import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/shared/component/header/header';
import Footer from '@/shared/component/footer/footer';
import { ThemeContextProvider }  from '@/context/theme-context';
import ThemeProvider from '@/provider/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'Create Next App',
 description: 'Generated by create next app',
};

export default function RootLayout ({
 children,
}: {
  children: React.ReactNode
}) {
 return (
  <html lang="en">
   <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
     rel="stylesheet"/>
   </head>
   <body className={inter.className}>
    <ThemeContextProvider>
     <ThemeProvider>
      <div className='container'>
       <div className='wrapper'>
        <Header/>{children}<Footer/>
       </div>
      </div>
     </ThemeProvider>
    </ThemeContextProvider>
   </body>
  </html>
 );
}
