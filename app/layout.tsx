import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ToasterProvider } from '@/components/toaster-provider';
import { ModalProvider } from '@/components/modal-provider';
import { CrispProvider } from '@/components/crisp-provider';

import './globals.css';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gen AI',
  description: 'AI Platform',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
        <footer className='py-4 text-center font-medium '>
            <p>&copy; 2023. Created by Yash Badgujar and Niharika Rindhe.</p>
        </footer>
        
      </html>
    </ClerkProvider>
  );
}
