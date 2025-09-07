import '@/styles/globals.css';
import {Link} from '@heroui/link';

import {Navbar} from '@/components/layout/navbar';
import {fontSans} from '@/config/fonts';
import {cn} from '@/lib/utils';

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div className={cn('min-h-screen text-foreground bg-background font-sans antialiased', fontSans.variable)}>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
        <footer className="w-full flex items-center justify-center py-3">
          <Link isExternal className="flex items-center gap-1 text-current" href="https://heroui.com?utm_source=next-app-template" title="heroui.com homepage">
            <span className="text-default-600">Powered by</span>
            <p className="text-primary">Sirius Changtra</p>
          </Link>
        </footer>
      </div>
    </div>
  );
}
